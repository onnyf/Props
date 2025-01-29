import { CiHome } from "react-icons/ci";
import { AiOutlineTeam } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TbLogs } from "react-icons/tb";


const Sidebar = () => {
  return (
<aside className="min-h-screen w-[25%]">
<div>
    <div className=" flex items-center m-4 rounded p-2 hover:bg-gray-100 cursor-pointer
     hover:text-purple-600 hover:font-bold duration-300 ease-out">
    <CiHome />
    <p className="ms-4">Dashboard</p>

    </div>

    <div className=" flex items-center m-4 rounded p-2 hover:bg-gray-100 cursor-pointer
     hover:text-purple-600 hover:font-bold duration-300 ease-out">
    <CiHome />
    <p className="ms-4">Team</p>
    <AiOutlineTeam />

    </div>

    <div className=" flex items-center m-4 rounded p-2 hover:bg-gray-100 cursor-pointer
     hover:text-purple-600 hover:font-bold duration-300 ease-out">
    <CiHome />
    <p className="ms-4">Projects</p>
    <FaShoppingBag />

    </div>

    <div className=" flex items-center m-4 rounded p-2 hover:bg-gray-100 cursor-pointer
     hover:text-purple-600 hover:font-bold duration-300 ease-out">
    <CiHome />
    <p className="ms-4">Calendar</p>
    <FaRegCalendarAlt />

    </div>

    <div className=" flex items-center m-4 rounded p-2 hover:bg-gray-100 cursor-pointer
     hover:text-purple-600 hover:font-bold duration-300 ease-out">
    <CiHome />
    <p className="ms-4">Blogs</p>
    <TbLogs />

    </div>
</div>
</aside>
     

  )
}

export default Sidebar