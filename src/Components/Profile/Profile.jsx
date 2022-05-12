import profileImg from '../../Assets/img/profile-pic.png'

export const Profile = () => {
    return (
        <div className="flex flex-col items-center ">
            <div className="h-40 w-40 rounded-full shadow-lg transition-all hover:scale-110 duration-500">
                <img className="border-8 border-blue-500 rounded-full" src={profileImg} alt="" />
            </div>
            <div className="mt-2 flex flex-col items-center text-white">
                <span className="md:text-2xl lg:text-3xl font-sans font-semibold">Ahmadullah Mirza</span>
                <span className='text-sm md:text-base'>Web Application Developer</span>
            </div>
        </div>
    )
}
