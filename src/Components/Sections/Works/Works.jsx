import { FullSection } from "../../FullSection/FullSection"

const worksDetail = [
    {
        title: 'Resturant Management System',
        catogary: 'Freelance',
        about: 'I created a full stack resturant management sofware.',
        techStack: 'Php, Laravel, Mysql, Rest',
    },
    {
        title: 'AUTOMATED TELEGRAM AFFILIATE BOT',
        catogary: 'Bot',
        about: 'This bot copies message from another group and creates a affiliate links and forwards it.',
        techStack: 'Python,Pyrogram.',
    },
    {
        title: 'TRICKYADMIN',
        catogary: 'Blog',
        about: 'I created this blog at very early age for sharing my technical knowledge.',
        techStack: 'Blogger cms',
    },
]

export const Works = () => {
    return (
        <FullSection id="works" title="My Works" className="flex-col bg-gray-700 text-white px-5 lg:px-0">

            <div className="">
                {worksDetail.map(work => (

                    <div key={work.title.substring(10)} className="my-5 border-l-8 p-2 pl-5 border-blue-500 bg-slate-400 bg-opacity-30">

                        <div className="border-b-2 border-blue-500 inline">
                            <h2 className="inline uppercase font-semibold lg:text-xl text-lg">{work.title}</h2>
                            <span className="font-medium"> | {work.catogary}</span>
                        </div>

                        <div className="leading-4 mb-2 mt-2">{work.about}</div>

                        <div className="">
                            <span className="text-blue-200 font-medium text-lg"> Tech Stack : </span>
                            <span>{work.techStack}</span>
                        </div>

                    </div>
                ))}
            </div>

        </FullSection>
    )
}
