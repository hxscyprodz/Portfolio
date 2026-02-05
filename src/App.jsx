import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import { SideBarProvider } from "../src/hooks/sidebarContext";

function App() {

    return (
        <SideBarProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <HomePage /> }/>
                </Routes>
            </BrowserRouter>
        </SideBarProvider>
            
    )
}

export default App
