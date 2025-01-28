import Mainbar from "../components/Mainbar"
import RightSidebar from "../components/RightSidebar"
import Sidebar from "../components/Sidebar"


const Home = () => {
  return (
    <>
    <main className="w-[100%] flex items-center ">
      <Sidebar/>
      <Mainbar/>
      <RightSidebar/>
    </main>
    
    </>
  )
}

export default Home