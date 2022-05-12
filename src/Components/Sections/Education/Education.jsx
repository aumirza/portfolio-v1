import React, { useState } from 'react'
import { Mousewheel } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { educations } from '../../../constants'
import { FullSection } from '../../FullSection/FullSection'



export const Education = () => {

    const [slidesLeft, setSlidesLeft] = useState(1)
    const [slidesViewed, setslidesViewed] = useState(0)

    const calculateSlides = (e) => {
        const slidesIndex = e.slides.length - e.realIndex
        const slidesViewed = e.slides.length - slidesIndex
        const slidesLeft = (e.slides.length - slidesViewed - 2) > 0 ? e.slides.length - slidesViewed - 2 : 0

        setslidesViewed(slidesViewed)
        setSlidesLeft(slidesLeft)
    }

    return (
        <FullSection id="education" title="Education" className="flex-col text-white bg-gray-600">

            <div className="relative px-10 md:px-0 md:w-96 lg:w-[40rem]">

                <div className="absolute ml-1 h-full flex flex-col justify-between">

                    <div className="flex z-10 flex-col h-8 ">
                        {new Array(slidesViewed).fill(0).map((_, i) =>
                            <div key={i} className="mb-1 h-3 w-3 bg-blue-500 rounded-full "></div>
                        )}
                        {new Array(educations.length - slidesViewed - 1).fill(0).map((_, i) =>
                            <div key={i} className="mb-1 h-3 w-3 bg-gray-100 shadow-lg rounded-full "></div>
                        )}
                    </div>

                    <div className="z-10">
                        {slidesLeft ? <div className="h-3 w-3 bg-blue-500 rounded-full "></div> : ""}
                        {!slidesLeft ? <div className="h-3 w-3 bg-gray-100 shadow-lg rounded-full "></div> : ""}
                    </div>

                    <div className="absolute ml-1 -z-0  border-white border-l-4 h-full"></div>
                </div>

                <div className="relative mt-10">

                    <div className="absolute top-4 bg-gray-600 rounded-full border-4 border-white h-5 w-5"></div>

                    <Swiper className='h-48'
                        slidesPerView={1.2}
                        centeredSlides={true}
                        modules={[Mousewheel]}
                        onSlideChange={(e) => calculateSlides(e)}
                        mousewheel={{ invert: false }}
                        direction={"vertical"}>

                        {educations.map((education, i) => (

                            <SwiperSlide key={i}>

                                <div className="flex relative">

                                    <div className="ml-2">
                                        <div className={"h-3 w-3 -ml-1 top-1 absolute bg-blue-500 rounded-full "}></div>
                                    </div>

                                    <div className="ml-5">

                                        <h3 className=' text-lg lg:text-xl  font-semibold uppercase'>
                                            {education.institution}
                                        </h3>
                                        <span className='text-base block'>{education.course}</span>
                                        <span className='text-base'>{education.place} | {education.session}</span>
                                    </div>
                                </div>

                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>

            </div>
        </FullSection>
    )
}
