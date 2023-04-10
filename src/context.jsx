import { useState, useContext, createContext } from "react";
import sublinks from "./data";

const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({ page: '', links: [] })

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    const openSubmenu = (text, coords) => {
        const submenu = sublinks.find(item => item.page === text)
        setPage(submenu)
        setLocation(coords)
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return <AppContext.Provider value={{ isSubmenuOpen, isSidebarOpen, openSubmenu, openSidebar, closeSubmenu, closeSidebar, location, page }}>
        {children}
    </AppContext.Provider>
}

export const useData = () => {
    return useContext(AppContext)
}