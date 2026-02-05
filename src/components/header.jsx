import { Sun, Moon, Menu } from "lucide-react";
import Logo from "./logo";
import { useState, useContext } from "react";
import PrimaryButton from "../ui/button";
import SideBar from "./sidebar";
import links from "../data/links";
import { SidebarContext } from "../hooks/sidebarContext";

function Header () {
    const [ isDark, setIsDark ] = useState(true);
    const { toggleSidebar} = useContext(SidebarContext);

    //header links rendering
    const linksElement = links.map( link => {
        return (
            <div key={link.key} className="tooltip">
                <a className="hover:text-blue-700" 
                    href={link.path}>{link.title}
                </a>
            </div>
        )
    })

    //function to toggle dark mode and light mode icon
    const toggleTheme = () => {
        setIsDark(theme => !theme)
    }

    

    return(
        <header className="flex justify-between h-20 items-center px-5
            fixed top-0 left-0 right-0 bg-[#031233] z-50">
            <Logo />
            <div>
                <nav className="hidden gap-10 text-md xl:flex">
                    {/*Header links*/}
                    {linksElement}
                </nav>
            </div>
            <div className="flex xl:hidden">
                <button  onClick={toggleSidebar}
                    className="cursor-pointer">
                    <Menu />
                </button>
            </div>
            <div className="hidden xl:flex items-center gap-7">
                <button onClick={toggleTheme} className="cursor-pointer">
                    {isDark === true ? <Sun /> : <Moon fill="black" color="black"/> }
                </button>
                <PrimaryButton text="Sign Up"/>
            </div>
            <SideBar />
        </header>
    )
}

export default Header;