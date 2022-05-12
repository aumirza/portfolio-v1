import profileImg from '../../Assets/img/profile-pic.png'

export const Profile = () => {
    return (
        <div className="flex flex-col items-center ">
            <div className="h-40 w-40 rounded-full shadow-lg transition-all hover:scale-110 duration-500">
                <img className="border-8 border-blue-500 rounded-full" src={profileImg} alt="" />
            </div>
            <div className="mt-5  sm:mt-1 flex flex-col items-center text-white">
                <span className="text-2xl lg:text-3xl font-sans font-semibold">Ahmadullah Mirza</span>
                <span className=''>Web Application Developer</span>
            </div>
        </div>
    )
}
