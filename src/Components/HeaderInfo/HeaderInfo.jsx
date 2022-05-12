import React from 'react'
import Typed from "react-typed"

export const HeaderInfo = () => {
    return (
        <div className="flex flex-col font-sans">

            <div className="text-center md:text-left">

                <span className="text-2xl lg:text-3xl">Hi, myself</span>

                <div className="text-3xl lg:text-4l">
                    <Typed strings={["Ahmadullah Mirza"]} typeSpeed={80} />
                </div>

                <div className="text-2xl lg:text-4xl font-serif">
                    <span>I am </span>
                    <Typed
                        className="text-blue-500" typeSpeed={50} backSpeed={40} loop
                        strings={["Web Developer ", "Full Stack Developer", "Front-end Engineer"]}
                    />
                </div>
            </div>

            <div className="text-lg mt-2 md:mt-5 font-sans">
                I started my programming career with a blog. From
                editing my xml templates to a full stack softwares.
                I like to code and program in free time as hobby.
            </div>

        </div>
    )
}
