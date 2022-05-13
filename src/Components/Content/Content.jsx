import React from "react"
import { Contact } from "../Sections/Contact/Contact"
import { Education } from "../Sections/Education/Education"
import { Features } from "../Sections/Features/Features"
import { Header } from "../Sections/Header/Header"
import { Skills } from "../Sections/Skills/Skills"
import { Works } from "../Sections/Works/Works"

export const Content = () => {
    return (
        <div className="car-scroll w-full sm:pl-60 lg:pl-80 overflow-y-auto overflow-x-hidden">
            <Header />
            <main>
                <Features />
                <Skills />
                <Education />
                <Works />
                <Contact />
            </main>
        </div>
    )
}
