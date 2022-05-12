
import { FaReact, FaCss3, FaJs, FaHtml5, FaPhp, FaPython, FaNode } from "react-icons/fa"
import { SiDjango, SiExpress, SiFirebase, SiFlask, SiJquery, SiJsonwebtokens, SiMongodb, SiMysql, SiRedux } from "react-icons/si"

export const skillsCatogaries = [
    {
        title: 'Front-End',
        skills: [
            {
                icon: FaJs,
                value: 85
            },
            {
                icon: FaCss3,
                value: 93
            },
            {
                icon: FaHtml5,
                value: 95
            },
            {
                icon: SiJquery,
                value: 70
            },
            {
                icon: FaReact,
                value: 80
            },
            {
                icon: SiRedux,
                value: 50
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
                value: 75,
            },
            {
                icon: FaNode,
                value: 75,
            },
            {
                icon: SiExpress,
                value: 85,
            },
            {
                icon: SiFlask,
                value: 80,
            },
            {
                icon: SiDjango,
                value: 65,
            },
        ]
    },
    {
        title: 'Other',
        skills: [
            {
                icon: SiMysql,
                value: 75,
            },
            {
                icon: SiFirebase,
                value: 60,
            },
            {
                icon: SiMongodb,
                value: 80,
            },
            {
                icon: SiJsonwebtokens,
                value: 70,
            },
        ]
    },
]
