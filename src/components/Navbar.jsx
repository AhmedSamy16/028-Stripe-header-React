import { useData } from "../context"
import logo from "../images/logo.svg"
import { FaBars } from "react-icons/fa"

const Navbar = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useData()

    const displayMenu = (e) => {
        const text = e.target.textContent
        const tempBtn = e.target.getBoundingClientRect()
        const center = (tempBtn.left + tempBtn.right) / 2
        const bottom = tempBtn.bottom - 3
        openSubmenu(text, { center, bottom })
    }
    const handleSubmenu = (e) => {
        if (!e.target.classList.contains('link-btn')) {
            closeSubmenu()
        }
    }
    return (
        <nav className="nav" onMouseOver={handleSubmenu}>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="Stripe" className="nav-logo" />
                    <button className="btn toggle-btn" onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    <li>
                        <button className="link-btn" onMouseOver={displayMenu}>products</button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={displayMenu}>developers</button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={displayMenu}>company</button>
                    </li>
                </ul>
                <button className="btn signin-btn">Sign in</button>
            </div>
        </nav>
    )
}

export default Navbar