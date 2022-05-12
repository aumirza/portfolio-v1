import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Keyboard } from 'swiper'
import { FaReact, FaCss3, FaJs, FaHtml5, FaPhp, FaPython, FaNode } from "react-icons/fa"
import { SiDjango, SiExpress, SiFirebase, SiFlask, SiJquery, SiJsonwebtokens, SiMongodb, SiMysql, SiRedux } from "react-icons/si"
import { ProgressBar } from "../../UI/ProgressBar/ProgressBar"

import "swiper/css"
import "swiper/css/effect-coverflow"
import { FullSection } from "../../FullSection/FullSection"

const skillCatogs = [
    {
        title: 'Front-End',
        skills: [
            {
                icon: FaReact,
                value: 62
            },
            {
                icon: FaJs,
                value: 70
            },
            {
                icon: FaCss3,
                value: 80
            },
            {
                icon: FaHtml5,
                value: 90
            },
            {
                icon: SiJquery,
                value: 90
            },
            {
                icon: SiRedux,
                value: 90
            },

        ]
    },
    {
        title: 'Back-End',
        skills: [
            {
                icon: FaPhp,
                value: 80,
            },
            {
                icon: FaPython,
                value: 80,
            },
            {
                icon: FaNode,
                value: 80,
            },
            {
                icon: SiFlask,
                value: 80,
            },
            {
                icon: SiDjango,
                value: 80,
            },
            {
                icon: SiExpress,
                value: 80,
            },
        ]
    },
    {
        title: 'Other',
        skills: [
            {
                icon: SiMysql,
                value: 80,
            },
            {
                icon: SiFirebase,
                value: 80,
            },
            {
                icon: SiMongodb,
                value: 80,
            },
            {
                icon: SiJsonwebtokens,
                value: 80,
            },
        ]
    },
]

export const Skills = () => {

    return (
        <FullSection className=" bg-gray-700 text-white">

            <div className="w-full overflow-hidden">
                <h1 className="text-3xl md:text-4xl font-semibold text-center mb-10 "> My Skills</h1>

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
                        skillCatogs.map(skillCatog => (
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


