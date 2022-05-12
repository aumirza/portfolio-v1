import Lottie from "react-lottie"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Mousewheel, Keyboard } from "swiper"
import 'swiper/css'
import 'swiper/css/effect-cards'

import animationDatas from "../../../Lotties"


export const Features = () => {
    return (
        <section className="h-screen flex justify-center items-center bg-gray-600">
            <div className="md:p-3 h-44 w-60 md:h-52 md:w-72 lg:h-64 lg:w-96">
                <Swiper
                    effect={"cards"}
                    modules={[EffectCards, Mousewheel, Keyboard]}
                    grabCursor={true}
                    mousewheel={{ invert: false }}
                    keyboard={{ enabled: true }}
                >
                    {animationDatas.map(
                        (animationData, i) => (
                            <SwiperSlide key={animationData.layers.at(2) + i}>
                                <div className="h-44 w-60 md:h-52 md:w-72 lg:h-64 lg:w-96  flex justify-center items-center bg-slate-800 shadow-lg rounded">
                                    <Lottie options={{ animationData }} />
                                </div>
                            </SwiperSlide >
                        )
                    )}

                </Swiper>

            </div>
        </section>
    )
}
