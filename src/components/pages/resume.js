import React from 'react'
import Header from '../header';
import Footer from '../footer';
import resume from '../images/resume.png'

export default function Resume() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Header
                titleOne="Jocelyn's"
                colorOne="text-rem-blue"
                titleTwo="Resume"
                quote='"She is very easy to work with and always adds a lot of fun to team projects. I would highly recommend Jocelyn to anyone in need of a full stack developer."'
            />
            <div className="p-5 m-5 md:flex container rounded-md mx-auto bg-rem-tan">
            <a href="https://docs.google.com/document/d/1ISDJDI6HHXNktBTEYzDdGsEXPZqZwd_1rlvw95BCUHc/edit?usp=sharing" target="_blank" rel="noreferrer"><img src={resume} className="w-screen object-cover hover:scale-105 transition-all transform duration-400 rounded-md max-w-60 max-h-60 md:float-right" alt="resume" /></a>
                <div className="flex-col">
                    <p className=" pt-2 pl-5 font-thin text-3xl">SKILLS: Photoshop | Javascript | HTML5 | CSS | React |  Bootstrap | Tailwind | Adobe XD | MySQL | MongoDB | GraphQL</p>                </div>

            </div>


            <Footer />
        </div >
    )
}