
import './App.css'
import BurgerBox from './features/burger/BurgerBox'
import Customer from './features/customer/Customer'
import HookContainer from './features/pizza/HookContainer'
import PizzaBox from './features/pizza/PizzaBox'

function App() {

  return (
    <>
     <PizzaBox />
     <HookContainer />
     <BurgerBox />
     <Customer />
    </>
  )
}

export default App
