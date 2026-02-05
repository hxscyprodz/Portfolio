import { createContext, useState } from "react";

const SidebarContext = createContext();

const SideBarProvider = ({ children }) => {
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};

export {SidebarContext, SideBarProvider}