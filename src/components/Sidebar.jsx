import { useData } from "../context"
import { FaTimes } from "react-icons/fa"
import sublinks from "../data"

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useData()
    return (
        <aside className={`sidebar-wrapper ${isSidebarOpen && 'show'}`}>
            <div className="sidebar">
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>
                <div className="sidebar-links">
                    {sublinks.map((item, i) => {
                        const { page, links } = item
                        return <article key={i}>
                            <h4>{page}</h4>
                            <div className="sidebar-sublinks">
                                {links.map((link, j) => {
                                    const { url, icon, label } = link
                                    return <a key={j} href={url}>
                                        {icon}
                                        {label}
                                    </a>
                                })}
                            </div>
                        </article>
                    })}
                </div>
            </div>
        </aside>
    )
}

export default Sidebar