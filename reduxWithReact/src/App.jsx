
import './App.css'
import BurgerBox from './features/burger/BurgerBox'
import Customer from './features/customer/Customer'
import HookContainer from './features/pizza/HookContainer'
import PizzaBox from './features/pizza/PizzaBox'
import Products from './features/product/Products'

function App() {

  return (
    <>
     <PizzaBox />
     <HookContainer />
     <BurgerBox />
     <Customer />
     <Products />
    </>
  )
}

export default App
