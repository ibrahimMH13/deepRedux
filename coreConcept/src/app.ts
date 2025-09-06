import { combineReducers, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { thunk } from "redux-thunk";
import axios from "axios";
// ###########################################################
// Action Types
// ###########################################################
const ORDER_PIZZA = "ORDER_PIZZA";
const ORDER_BURGER = "ORDER_BURGER";

// ###########################################################
// Action Creators
// ###########################################################
function orderPizza() {
  return {
    type: ORDER_PIZZA,
  };
}

function orderBurger() {
  return {
    type: ORDER_BURGER,
  };
}

/*
   ===========================================================
   Redux Data Flow Reference
   ===========================================================
   
   $ User --> Dispatch(Action) 
       @ Reducer (handles the action)
           @ Returns a new State (immutably replaces old state)
   
   ⚡ Important:
   - Application state is IMMUTABLE
   - User cannot manipulate state directly
   - Only reducers can define how state changes
   ===========================================================
   Redux Lifecycle Flow
   ===========================================================

     (1) User Interaction
          |
          v
     (2) Dispatch(Action)
          |
          v
     (3) Reducer
          |   (pure function, handles action)
          v
     (4) New State (immutable)
          |
          v
     (5) UI Re-render
          |
          v
     (back to User...)

   ===========================================================
   Console Figure Style:

     $ User ----> Action
     @ Action --> Reducer
     # Reducer -> State
     % State ---> UI
     & UI <------ User
   ===========================================================
*/

// ###########################################################
// Initial State for Single Reducer Example
// ###########################################################
const initialState = {
  pizzaBase: 1000,
  burgerBase: 300,
  toppings: ["cheese", "beef"],
};

// ###########################################################
// Reducer (Single)
// ###########################################################
const reducer = (state = initialState, action: any) => {
  switch (action?.type) {
    case ORDER_PIZZA:
      console.log("Logger inside reducer, pizza action#", state.pizzaBase);
      return {
        ...state,
        pizzaBase: state.pizzaBase - 1,
      };
    case ORDER_BURGER:
      console.log("Logger inside reducer, burger action#", state.burgerBase);
      return {
        ...state,
        burgerBase: state.burgerBase - 1,
      };
    default:
      return state;
  }
};

// ###########################################################
// Redux Store: 5 Main Responsibilities
// ###########################################################

// 1️⃣ Store holds the whole application state
const store = createStore(reducer);

// 2️⃣ Store provides `getState()` to access the current state
console.log("\n### Initial State (Single Reducer) ###");
console.log(store.getState());

// 3️⃣ Store allows registration of listeners via `subscribe()`
const unSubscribe = store.subscribe(() => {
  console.log("### State Updated (via subscribe) ###");
  console.log(store.getState());
});

// 4️⃣ Store allows state to be updated via `dispatch(action)`
store.dispatch(orderPizza());
store.dispatch(orderPizza());

// Unsubscribe so no further logs
unSubscribe();

// Dispatching after unsubscribe (still updates state, but no log from listener)
store.dispatch(orderPizza());
store.dispatch(orderBurger());
store.dispatch(orderBurger());

console.log("\n### Final State After Dispatches (Single Reducer) ###");
console.log(store.getState());

// ###########################################################
// Multi-Reducer Example with combineReducers
// ###########################################################

// Initial states
const pizzaInitialState = { pizza: 50 };
const burgerInitialState = { burger: 50 };

// Pizza reducer
const pizzaReducer = (state = pizzaInitialState) => {
  return {
    ...state,
    pizza: state.pizza - 1,
  };
};

// Burger reducer
const burgerReducer = (state = burgerInitialState) => {
  return {
    ...state,
    burger: state.burger - 1,
  };
};

// Combine reducers
const rootReducer = combineReducers({
  pizza: pizzaReducer,
  burger: burgerReducer,
});

// Store with rootReducer
const storeApp = createStore(rootReducer);

console.log("\n");
console.log("=========================================================");
console.log("####### Initial State (Multi-Reducer) #######");
console.log("=========================================================");
console.log("\n");
console.log(storeApp.getState());
storeApp.dispatch(orderPizza());
storeApp.dispatch(orderBurger());

console.log("\n### Updated State (Multi-Reducer) ###");
console.log(storeApp.getState());

// ###########################################################
// Reducers Concept
// ###########################################################
//
// In React (without Redux):
//   - You often use a reducer directly (e.g. useReducer hook).
//   - Actions are dispatched straight to the reducer.
//
// In Redux:
//   - A "store" sits in the middle.
//   - The store can have multiple reducers, combined into one root reducer.
//   - Data flow:
//              -> Event
//              -> Dispatch(Action)
//              -> Store (Reducer/Root Reducer)
//              -> New State
//              -> UI Re-render
//
// Key Points:
//   - Each reducer is a pure function: (state, action) => newState
//   - Reducers never mutate state; they return a new state object.
//   - Difference:
//       • Raw reducer (React useReducer): dispatch → reducer
//       • Redux reducer: dispatch → store → reducer(s)

// ###########################################################
// Middleware
// ###########################################################
//
// ⚡ Why Middleware?
// - Reducers must be pure functions → they cannot handle side effects
//   (like API calls, logging, timers, crash reporting, etc.).
// - We could put async logic in components, but that scatters logic
//   and makes it harder to maintain.
// - Middleware provides a central place for side effects.
//
// How Middleware Works:
//   Action → Dispatch → [ Middleware(s) ] → Reducer(s) → New State
//
// What Middleware Can Do:
//   - API calls (async data fetching)
//   - Timers / scheduling tasks
//   - Logging actions & state transitions
//   - Crash reporting
//   - Pausing / canceling actions
//   - Perfect place for side effects
// ###########################################################

console.log("=========================================================");
console.log("\n####### Middleware #######\n");
console.log("=========================================================");

// Example: Logger Middleware
const logger = createLogger();

// Create store with middleware
const appStoreWithMid = createStore(rootReducer, applyMiddleware(logger));

// Dispatching an action
appStoreWithMid.dispatch(orderBurger());

// Logger middleware automatically logs (no manual console needed):
// -----------------------------------------------------------
// action ORDER_BURGER @ 13:30:31.131
// prev state { pizza: { pizza: 49 }, burger: { burger: 49 } }
// action     { type: 'ORDER_BURGER' }
// next state { pizza: { pizza: 48 }, burger: { burger: 48 } }
// -----------------------------------------------------------

// ###########################################################
// Async Actions with Middleware (Redux Thunk)
// ###########################################################
//
// ⚡ Problem:
// - Reducers must be pure → they cannot perform async tasks (like fetching data).
// - We need a way to handle async operations before the reducer.
//
// ✅ Solution: Redux Thunk Middleware
// - Thunk allows action creators to return a *function* instead of an action object.
// - That function can perform async work (like API calls) and then
//   dispatch regular actions (request/success/error).
//
// 🔗 Data Flow:
//   UI Event → Dispatch(thunk function) → Thunk Middleware → Async Work
//             → Dispatch(normal actions) → Reducer → New State → UI
//
// ###########################################################

console.log("=========================================================");
console.log("\n####### Async Action Middleware (Thunk) #######\n");
console.log("=========================================================");

// ###########################################################
// Action Types
// ###########################################################
const ASYNC_APP_ACTIONS = {
  FETCH_REQUEST: "FETCH_REQUEST",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};

// ###########################################################
// Initial State
// ###########################################################
const asyncActionAppInitialState = {
  loading: false,
  products: [],
  error: false,
};

// ###########################################################
// Action Creators
// ###########################################################
function fetchRequest() {
  return { type: ASYNC_APP_ACTIONS.FETCH_REQUEST };
}

function fetchSuccess(products: any) {
  return { type: ASYNC_APP_ACTIONS.FETCH_SUCCESS, payload: products };
}

function fetchError() {
  return { type: ASYNC_APP_ACTIONS.FETCH_ERROR };
}

// ###########################################################
// Reducer
// ###########################################################
const asyncActionAppReducer = (
  state: {} = asyncActionAppInitialState,
  action: any = {}
) => {
  switch (action.type) {
    case ASYNC_APP_ACTIONS.FETCH_REQUEST:
      return { ...state, loading: true };
    case ASYNC_APP_ACTIONS.FETCH_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case ASYNC_APP_ACTIONS.FETCH_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

// ###########################################################
// Store with Middleware (Thunk + Logger)
// ###########################################################
const asyncActionStoreMid = applyMiddleware(thunk, logger);
const asyncActionStoreApp = createStore(
  asyncActionAppReducer,
  asyncActionStoreMid
);

// ###########################################################
// Thunk Action Creator (Async Function)
// ###########################################################
//
// - Instead of returning a plain object, it returns a function
// - Thunk middleware intercepts it, runs async work (API call)
// - Dispatches "real" actions before/after async work
//
const fetchProducts = () => {
  return async function (dispatch: (event: any) => void) {
    try {
      dispatch(fetchRequest()); // Start loading
      const response = await axios.get("https://fakestoreapi.com/products");
      const products = response.data.map((p: any) => p.title);
      dispatch(fetchSuccess(products)); // Success: send products
    } catch (e) {
      dispatch(fetchError()); // Error: set error flag
    }
  };
};

// ###########################################################
// Dispatch Async Action
// ###########################################################
// When we call:
asyncActionStoreApp.dispatch(fetchProducts());

// Here's what happens step by step:

// 1️-`fetchProducts()` returns an async function:
//      async function(dispatch) { ... }

// 2️- Redux Thunk middleware intercepts the action. 
//    - It checks if the action is a function.
//    - Since it is, Thunk calls the function immediately and injects
//      the store's dispatch as the first argument:
//      action(store.dispatch, store.getState)

// 3️- Inside the function:
//    - We can now call `dispatch(fetchRequest())` to indicate loading.
//    - Perform the async API call using `axios`.
//    - On success, dispatch `fetchSuccess(products)`.
//    - On error, dispatch `fetchError()`.

// 4️- Each dispatched action is a normal action object, so it passes
//    through reducers and updates the state as usual.

// 5️- Logger middleware prints each step automatically, showing:
// -----------------------------------------------------------
// action     FETCH_REQUEST
// next state { loading: true, products: [], error: false }
//
// action     FETCH_SUCCESS
// next state { loading: false, products: [ 'T-Shirt', 'Laptop', ...], error: false }
// -----------------------------------------------------------
//
// If the API fails:
// action     FETCH_ERROR
// next state { loading: false, products: [], error: true }

// * Key Point:
// The `dispatch` parameter in the async function is **injected automatically by Thunk**.
// We don’t call it ourselves; Thunk passes the store's dispatch when it runs the function.

// Logger middleware will print the whole async flow:
// -----------------------------------------------------------
// action     FETCH_REQUEST
// next state { loading: true, products: [], error: false }
//
// action     FETCH_SUCCESS
// next state { loading: false, products: [ 'T-Shirt', 'Laptop', ...], error: false }
// -----------------------------------------------------------
//
// If the API fails:
// action     FETCH_ERROR
// next state { loading: false, products: [], error: true }
//
// ###########################################################
