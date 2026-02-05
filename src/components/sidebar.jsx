import links from "../data/links";
import { X } from "lucide-react";
import { useContext } from "react";
import { SidebarContext } from "../hooks/sidebarContext";

function SideBar () {
    const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);


   const linksElement = links.map( link => {
        return (
            <div onClick={toggleSidebar}
                key={link.key} className="tooltip">
                <a className="text-[18px] font-semibold text-blue-600 hover:text-white bg-white w-full inline-block
                    p-4  hover:bg-blue-600 rounded-md" 
                    href={link.path}>{link.title}
                </a>
            </div>
        )
    })

    return (
        <aside className={`absolute bg-white top-20 w-4/5 right-0 rounded-l-2xl rounded-t-2xl 
            flex-col gap-1 py-7 px-1 shadow-2xl shadow-blue-600 ${isSidebarOpen ? 'flex': 'hidden'}
            ${isSidebarOpen ? 'translate-x-0': 'translate-x-100'} transition duration-700 ease-in-out`}>
            {linksElement}
            <p className="text-gray-400 text-center text-sm mt-10">Copyright &copy; {new Date().getFullYear()}. Thabani</p>
        </aside>
    )
}

export default SideBar;