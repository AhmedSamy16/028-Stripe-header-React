import { useData } from "../context"
import { useRef, useEffect, useState } from "react"

const Submenu = () => {
    const [cols, setCols] = useState("col-2")
    const { isSubmenuOpen, location, page } = useData()
    const container = useRef(null)
    useEffect(() => {
        const submenu = container.current
        const { center, bottom } = location
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`
        if (page.links.length === 3) {
            setCols('col-3')
        } else if (page.links.length > 3) {
            setCols('col-4')
        } else {
            setCols('col-2')
        }
    }, [location, page.links])
    return (
        <aside className={`submenu ${isSubmenuOpen && 'show'}`} ref={container}>
            <h4>{page.page}</h4>
            <div className={`submenu-center ${cols}`}>
                {page.links.map((item, i) => {
                    const { label, icon, url } = item
                    return <a href={url} key={i}>
                        {icon}
                        {label}
                    </a>
                })}
            </div>
        </aside>
    )
}

export default Submenu