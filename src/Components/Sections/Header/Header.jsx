import Typed from "react-typed"
import { Room } from "../../Room/Room"

export const Header = () => {
    return (
        <header id="about" className="relative  overflow-hidden flex flex-col-reverse lg:flex-row justify-center items-center px-5 sm:px-10 bg-gray-700 h-screen text-white">
            <div className="flex flex-col font-sans">

                <div className="text-center md:text-left">
                    <span className="text-xl lg:text-2xl">Hi, myself</span>
                    <div className="text-2xl lg:text-3xl">
                        <span> </span>
                        <Typed strings={["Ahmadullah Mirza"]} typeSpeed={80} />
                    </div>
                    <div className="text-2xl lg:text-4xl font-serif">
                        <span>I am </span>
                        <Typed
                            className="text-blue-500"
                            strings={
                                ["Web Developer ", "Full Stack Developer", "Front-end Engineer"]
                            }
                            typeSpeed={50} backSpeed={40} loop />
                    </div>
                </div>
                <div className="text-sm sm:text-base lg:text-lg mt-2 md:mt-5 font-sans">
                    I started my programming career with a blog. From
                    editing my xml templates to a full stack softwares.
                    I like to code and program in free time as hobby.
                </div>
            </div>
            <div className="flex justify-center">
                <div className="h-60 w-60 md:w-80 md:h-80 lg:h-96 lg:w-96 ">

                </div >
                <div className="absolute h-2/3 md:h-4/5 lg:h-full w-full">
                    <Room />
                </div>
            </div>
        </header>
    )
}