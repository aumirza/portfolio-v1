import React from 'react'
import { FaChevronRight, FaTimes } from 'react-icons/fa'

export const SidebarToggle = ({ setshowSidebar, showSidebar }) => {
    return (
        <div
            onClick={() => setshowSidebar(showSidebar => !showSidebar)}
            className={'flex z-30 duration-300 justify-center items-center fixed top-0 sm:hidden h-12 w-12 bg-slate-200'
                + " " + (showSidebar ? "left-56" : "left-0")} >
            {showSidebar ?
                <FaTimes className='text-4xl' /> :
                <FaChevronRight className='text-4xl' />
            }
        </div>
    )
}
