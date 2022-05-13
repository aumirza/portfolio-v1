import { FullSection } from "../../FullSection/FullSection"
import { FaAddressCard, FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"


const socials = [
    {
        icon: FaFacebook,
        link: 'facebook.com',
        username: 'Ahmadullah.mirza',
    },
    {
        icon: FaTwitter,
        link: 'twitter.com',
        username: 'Ahmadullahmirza',
    },
    {
        icon: FaLinkedinIn,
        link: 'linkedin.com',
        username: 'Ahmadullah.mirza',
    },
    {
        icon: FaGithub,
        link: 'github.com',
        username: 'aumirza',
    },
    {
        icon: FaInstagram,
        link: 'instagram.com',
        username: 'au.mirza',
    },
]

export const Contact = () => {
    return (
        <FullSection id="contact" title="Contact me" className="text-sm sm:text-base bg-gray-600 text-white">

            <div className="flex flex-col items-center">

                <div className="shadow-md rounded flex flex-col md:flex-row mb-10 lg:px-5 md:py-4 " >

                    <div className="px-5 lg:mr-5 w-68 md:w-60 lg:w-96">

                        <div className="my-1 flex flex-col text-lg">
                            <label htmlFor="Name">Name</label>
                            <input className="h-7 lg:h-8  text-gray-800 rounded" name="Name" type="text" />
                        </div>

                        <div className="my-1 flex flex-col text-lg">
                            <label htmlFor="Email">Email</label>
                            <input className="h-7 lg:h-8  text-gray-800 rounded" name="Email" type="text" />
                        </div>
                        <div className="my-1 flex flex-col text-lg">
                            <label htmlFor="Message">Message</label>
                            <textarea className="text-gray-800 rounded h-20 lg:h-24" name="Message" type="text" />
                        </div>
                    </div>

                    <div className="py-3 px-5 md:px-1 md:py-5 lg:py-8">
                        <div className="flex items-center mb-1 lg:mb-2">
                            <FaMailBulk className="mr-2 text-2xl lg:text-3xl" />
                            <span className="text-lg">Mirzaahmad9028.am@gmail.com</span>
                        </div>
                        <div className="flex items-center mb-1 lg:mb-2">
                            <FaPhone className="mr-2 text-2xl lg:text-3xl" />
                            <span className="text-lg">+91 9956763804</span>
                        </div>
                        <div className="flex items-center mb-1 lg:mb-2">
                            <FaAddressCard className="mr-2 text-2xl lg:text-3xl" />
                            <span className="text-lg">........</span>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    {
                        socials.map(social => (

                            <span key={social.link} className="mx-2 lg:mx-3 hover:scale-125 duration-200">
                                <a href={'https://' + social.link + '/' + social.username}>
                                    <social.icon className="text-4xl lg:tet-5xl" />
                                </a>
                            </span>
                        ))
                    }
                </div>

                <div className="mt-5">
                    <span>© {new Date().getFullYear()} Ahmadullah Mirza</span>
                </div>
            </div>

        </FullSection>
    )
}
