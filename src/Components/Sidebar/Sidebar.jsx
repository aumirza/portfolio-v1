import { BiExit } from 'react-icons/bi'
import { RESUME_LINK } from '../../constants'
import { Nav } from "../Nav/Nav"
import { Profile } from "../Profile/Profile"

export const Sidebar = ({ showSidebar }) => {
    return (
        <aside className={"fixed z-20 overflow-hidden ease-in-out duration-300 sm:flex h-screen bg-gray-800  flex-col items-center sm:w-60 lg:w-80"
            + " " + (showSidebar ? "w-56" : "w-0")}>

            <div
                className={`relative md:pt-14 pt-5 md:pb-5 w-full before:content-[""]  \
                            before:absolute  before:w-full before:top-0  before:h-1/2 before:-z-10 \
                            before:bg-cover before:bg-[url('../public/cover-image.png')]`}
            >
                <Profile />
            </div>
            <div className="py-5">
                <Nav />
            </div>

            <a className='absolute  bottom-0 w-full ' href={RESUME_LINK} target='_blank' rel="noreferrer">
                <div className="flex justify-center items-center rounded-t-md bg-gray-200 py-5 h-10">
                    <span className='text-xl mr-3'>Resume</span>
                    <BiExit className='text-xl' />
                </div>
            </a>

        </aside>
    )
}
