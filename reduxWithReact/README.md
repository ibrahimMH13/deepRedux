# before React intrduce the hooks
we use mapStateToProps , mapDispatchTopProps aling with connect function within Compentent Func

# hooks
hooks called within components
hooks can only called at the top level of a components
hooks cannot be conditional
we use useSelector hook to access data state 

const data = useSelector(state=> state.data)

# Root Reducers
when use combineReducers to combine reducers we can access those thier data using ther reducers name
state.pizza.pizzaBuses
or 
state.burger.burgerBuns

const data = useSelector(state=> state.pizza.data)