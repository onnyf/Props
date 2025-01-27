import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"



const App = () => {
  return (
    <>

    <Navbar/>
    <div className="min-h-screen">
      <Outlet/>
    </div>
    <Footer/>
    
    
    </>
  )
}

export default App