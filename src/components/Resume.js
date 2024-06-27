import React from 'react';
import Header from './header';
import Footer from './footer';
import resume from './images/resume.png';

const Resume = () => {
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
                    <h1 className=" pt-2 pl-5 text-3xl">SKILLS:</h1>
                    <p className=" pt-2 pl-5 font-thin text-3xl">| WCAG 2.1 | Figma | Adobe CC | Javascript | HTML5 | CSS | React | Python | Django |  Bootstrap | Tailwind | Python | </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Resume;
