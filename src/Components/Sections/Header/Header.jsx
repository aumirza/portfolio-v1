
import { HeaderInfo } from "../../HeaderInfo/HeaderInfo"
import { Room } from "../../Room/Room"

export const Header = () => {
    return (
        <header id="about" className="relative  overflow-hidden flex flex-col-reverse lg:flex-row justify-center items-center px-5 sm:px-10 bg-gray-700 h-screen text-white">

            <HeaderInfo />

            <div className="flex justify-center">
                <div className="h-60 w-60 md:w-80 md:h-80 lg:h-96 lg:w-96 "></div >
                <div className="absolute h-2/3 md:h-4/5 lg:h-full w-full"><Room /></div>
            </div>

        </header>
    )
}