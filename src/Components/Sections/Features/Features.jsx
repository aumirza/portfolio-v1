import Lottie from "react-lottie"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Mousewheel, Keyboard } from "swiper"
import 'swiper/css'
import 'swiper/css/effect-cards'
import { features } from './featureDetails'
import { FullSection } from "../../FullSection/FullSection"

export const Features = () => {
    return (
        <FullSection
            title={<span className="font-[Handlee]">7 Steps For Devloping Great Things.</span>}
            className="h-screen flex flex-col justify-center items-center text-white bg-gray-600">

            <div className="md:p-3 h-44 w-60 md:h-52 md:w-72 lg:h-64 lg:w-96">

                <Swiper effect={"cards"} modules={[EffectCards, Mousewheel, Keyboard]}
                    grabCursor={true} mousewheel={{ invert: false }} keyboard={{ enabled: true }} >

                    {features.map((feature, i) => (

                        <SwiperSlide key={feature.animData.layers.at(2) + i}>
                            <div className="h-44 w-60 md:h-52 md:w-72 lg:h-64 pt-5 pb-2 lg:w-96  flex flex-col justify-center items-center bg-slate-800 shadow-lg rounded">
                                <span className="text-3xl font-semibold font-[Handlee]">
                                    {feature.title}
                                </span>
                                <Lottie options={{ animationData: feature.animData }} />
                            </div>
                        </SwiperSlide >

                    ))}

                </Swiper>

            </div>
        </FullSection >
    )
}
