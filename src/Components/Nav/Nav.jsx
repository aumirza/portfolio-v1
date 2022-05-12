import { Link } from "react-router-dom"

export const Nav = () => {
    const navLinks = ['about', 'education', 'works', 'contact']
    return (
        <nav className="flex justify-center">
            <ul>
                {navLinks.map((navLink => (
                    <Link key={navLink} to={"/#" + navLink}>
                        <li key={navLink} className="capitalize transition w-48 sm:w-52 md:w-56 lg:w-60 my-4 py-2 lg:py-3 text-center rounded-full bg-gray-600 hover:bg-white hover:text-gray-800 text-white">
                            {navLink}
                        </li>
                    </Link>
                )))}
            </ul>
        </nav>
    )
}
