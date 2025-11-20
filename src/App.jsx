
import './App.css'
import Navbar from './Components/Navbar'
import NewArrivals from './Components/NewArrivals'
import ProductOverview from './Components/ProductOverview'
import WomenMen from './Components/WomenMen'

function App() {

  return (
    <>
    <div className="max-w-full">
    <Navbar />
    <NewArrivals/>
    <WomenMen />
    <ProductOverview/>
    </div>
   
    </>
  )
}

export default App
