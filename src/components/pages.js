import React from 'react'
import Header from './header';
import Form from './form';
import Footer from './footer';
import avatar from './images/IMG_7504.JPG'
import firstFriday from './images/FIRSTFRIDAY2.png'
import bluegrass from './images/SunriseBluegrass.png'
import chamber from './images/chamber-ad.png'
import murphy from './images/Murphy-Fam-Xmas.png'
import resume from './images/Jocelyn-Remington-Resume.pdf'
import WebPortfolio from './portfolio';
import beSeated from './images/web/be-seated.png'
import codeQuiz from './images/web/code-quiz.png'
import fitnessTracker from './images/web/fitness-tracker.png'
import notetaker from './images/web/Notetaker.png'
import pourDecisions from './images/web/pour-decisions.png'
import weather from './images/web/weather-dashboard.png'


export function Home() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Header
                titleOne="Jocelyn"
                colorOne="text-rem-pink"
                titleTwo="Remington"
                quote='"She is always willing to ask the clarifying questions to ensure understanding. Jocelyn brings integrity to all she does."'
            />
            <div className="p-5 m-5 flex container rounded-md mx-auto bg-rem-tan">
                <img src={avatar} className="rounded-full max-w-60 max-h-60 float-right" alt="cartoon avatar of Jocelyn" />
                <div className="flex-col">
                    <p className=" pt-10 pl-5 text-3xl font-semibold">| Javascript | HTML5 | CSS | React |  Bootstrap | Tailwind | Photoshop | Adobe XD |</p>
                    <p className="pt-10 pl-5 text-2xl font-extralight">"Jocelyn is knowledgeable, articulate, and a pleasure to work with. She never hesitates to be the leader among her peers."</p>
                </div>

            </div>
            <Footer />
        </div>
    );
}

function PrintDesigns(props) {
    return (
        <div className="print-design mb-20 md:mb-1 md:col-span-1">
            <img alt={props.alt} src={props.src} />
        </div>
    );
}

export function Portfolio() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Header
                titleOne="Jocelyn's"
                colorOne="text-rem-tan"
                titleTwo="Portfolio"
                quote='"I believe she has such a positive impact in every environment she is in. Jocelyn will go above and beyond to ensure she provides the best quality work!"'
            />
            <div className="my-3 container mx-auto">
                <h1 className="font-thin text-4xl ml-5 mt-5">Developer Portfolio</h1>
                <div className="md:grid p-2 grid-cols-3 sm:justify-center md:justify-between">
                    <WebPortfolio
                        preview={beSeated}
                        alt="preview of be seated app"
                        website="https://beseated.herokuapp.com/"
                        title="Be|Seated"
                        githubRepo="https://github.com/jocelynrem/project-2"
                        text1="On this project I contributed in this way"
                    />
                    <WebPortfolio
                        preview={pourDecisions}
                        alt="preview of pour decisions app"
                        website="https://thompsonel11.github.io/Project_1/"
                        title="Pour Decisions"
                        githubRepo="https://github.com/thompsonel11/Project_1"
                        text1="On this project I contributed in this way"
                    />
                    <WebPortfolio
                        preview={fitnessTracker}
                        alt="preview of fitness tracker app with graph results"
                        website="https://workout-tracker-jremington.herokuapp.com/stats"
                        title="Fitness Tracker"
                        githubRepo="https://github.com/jocelynrem/workoutTracker"
                        text1="On this project I contributed in this way"
                    />

                    <WebPortfolio
                        preview={codeQuiz}
                        alt="preview of code quiz app"
                        website="https://jocelynrem.github.io/Code-Quiz/"
                        title="Code Quiz"
                        githubRepo="https://github.com/jocelynrem/Code-Quiz"
                        text1="On this project I contributed in this way"
                    />
                    <WebPortfolio
                        preview={weather}
                        alt="preview of weather app"
                        website="https://jocelynrem.github.io/weather-dahboard/"
                        title="Weather Dashboard"
                        githubRepo="https://github.com/jocelynrem/weather-dahboard"
                        text1="On this project I contributed in this way"
                    />
                    <WebPortfolio
                        preview={notetaker}
                        alt="preview of notetaker app"
                        website="https://calm-fortress-51934.herokuapp.com/notes"
                        title="Notetaker"
                        githubRepo="https://github.com/jocelynrem/note_taker"
                        text1="On this project I contributed in this way"
                    />

                </div>
            </div>
            <div className="my-3 container mx-auto">
                <h1 className="font-thin text-4xl ml-5 mt-5">Print Portfolio</h1>
                <div className="md:flex md:pb-16 p-2 md:flex-cols md:justify-evenly mx-auto">
                    <PrintDesigns alt="first friday logo" src={firstFriday} />
                    <PrintDesigns alt="poster for bluegrass concert" src={bluegrass} />
                    <PrintDesigns alt="ad for charter school" src={chamber} />
                    <PrintDesigns alt="poster for Murphy Family Christmas concert" src={murphy} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export function Contact() {
    return (
        <div className="flex flex-col h-screen justify-between">

            <Header
                titleOne="Contact"
                titleTwo="Jocelyn"
                colorTwo="text-rem-teal"
                quote='"She always asks the right questions, works hard learning new languages and frameworks, and is an amazing team player with other students."'
            />
            <Form />
            <Footer />
        </div>
    )
}

export function Resume() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Header
                titleOne="Jocelyn's"
                colorOne="text-rem-blue"
                titleTwo="Resume"
                quote='"She is very easy to work with and always adds a lot of fun to team projects. I would highly recommend Jocelyn to anyone in need of a full stack developer."'
            />
            <object className="ml-20 text-center" data={resume} type="application/pdf" width="50%" height="500px">
                <p>It appears you don't have a PDF plugin for this browser.
                    No biggie... you can <a href="https://drive.google.com/file/d/1OeCyICt424v7mSiFgoF4UjmiCOaBngeA/view?usp=sharing">click here to
                        download the PDF file.</a></p>
            </object>


            <Footer />
        </div >
    )
}
