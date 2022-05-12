import { useState } from "react"
import { Content } from "../Content/Content"
import { Sidebar } from "../Sidebar/Sidebar"
import { SidebarToggle } from "../SidebarToggle/SidebarToggle"

export const Layout = () => {
    const [showSidebar, setshowSidebar] = useState(false)
    return (
        <div>
            <SidebarToggle {...{ setshowSidebar, showSidebar }} />
            <Sidebar showSidebar={showSidebar} />
            <Content />
        </div >
    )
}
