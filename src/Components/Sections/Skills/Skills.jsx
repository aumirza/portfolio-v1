import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Keyboard } from 'swiper'
import { skillsCatogaries } from "./SkillDetails"
import { ProgressBar } from "../../UI/ProgressBar/ProgressBar"
import { FullSection } from "../../FullSection/FullSection"

import "swiper/css"
import "swiper/css/effect-coverflow"


export const Skills = () => {

    return (
        <FullSection title="My Skills"
            className=" bg-gray-700 text-white">

            <div className="w-full overflow-hidden">

                <Swiper
                    modules={[EffectCoverflow, Keyboard]}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={2}
                    coverflowEffect={{
                        "rotate": 50,
                        "stretch": 100,
                        "depth": 350,
                        "modifier": 1,
                        "slideShadows": false
                    }}
                >
                    {
                        skillsCatogaries.map(skillCatog => (
                            <SwiperSlide key={skillCatog.title}>
                                <div className="h-56 md:h-64 lg:h-72 w-56 md:w-72 lg:w-96 flex flex-col items-center py-5 text-white bg-slate-800 shadow-lg rounded">
                                    <div className="text-2xl font-mono mb-5">{skillCatog.title}</div>
                                    <table>
                                        <tbody>
                                            {skillCatog.skills.map(skill =>
                                            (
                                                <tr key={skill.icon}>
                                                    <th><skill.icon className="text-xl md:text-2xl lg:text-3xl" /></th>
                                                    <td><ProgressBar value={skill.value} /></td>
                                                </tr>
                                            )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </SwiperSlide >
                        ))
                    }

                </Swiper>
            </div>

        </FullSection>
    )
}


