import { Sun, Moon } from "lucide-react";
import { useState } from "react";
import PrimaryButton from "../ui/button";

function Header () {
    const [ isDark, setIsDark ] = useState(true);

    //Header links array for easier rendering
    const headerLinks = [
        { key: "link01", title: "Home", path: "/services"},
        { key: "link02", title: "About", path: "/services"},
        { key: "link03", title: "Services", path: "/services"},
        { key: "link04", title: "Blog", path: "/services"},
        { key: "link05",title: "Contact", path: "/services"},
    ]

    //header links rendering
    const links = headerLinks.map( link => {
        return (
            <a className="hover:text-blue-700" 
                key={link.key}
                href={link.path}>{link.title}
            </a>
        )
    })

    //function to toggle dark mode and light mode icon
    const toggleTheme = () => {
        setIsDark(theme => !theme)
    }

    

    return(
        <header className="flex justify-between h-30 items-center px-50
            fixed left-0 right-0">
            <div>
                <h1 className="font-bold text-3xl">HxscyTech</h1>
                <p className="text-sm italic">Code . Create . Conquer</p>
            </div>
            <div>
                <nav className="flex gap-10 text-md">
                    {/*Header links*/}
                    {links}
                </nav>
            </div>
            <div className="flex items-center gap-7">
                <button onClick={toggleTheme} className="cursor-pointer">
                    {isDark === true ? <Sun /> : <Moon fill="black" color="black"/> }
                </button>
                <PrimaryButton text="Sign Up"/>
            </div>
        </header>
    )
}

export default Header;