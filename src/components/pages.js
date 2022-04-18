import React from 'react'
import Header from './header';
import Form from './form';
import Footer from './footer';
import avatar from './images/IMG_7504.JPG'
import firstFriday from './images/FIRSTFRIDAY2.png'
import bluegrass from './images/SunriseBluegrass.png'
import chamber from './images/chamber-ad.png'
import murphy from './images/Murphy-Fam-Xmas.png'
import resume from './images/resume.png'
import WebPortfolio from './portfolio';
import beSeated from './images/web/be-seated.png'
import codeQuiz from './images/web/code-quiz.png'
import fitnessTracker from './images/web/fitness-tracker.png'
import notetaker from './images/web/Notetaker.png'
import pourDecisions from './images/web/pour-decisions.png'
import bookworm from './images/web/bookworm.png'
import traffic from './images/Afternoon-map.png'


export function Home() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Header
                titleOne="Jocelyn"
                colorOne="text-rem-pink"
                titleTwo="Remington"
                quote='"She is always willing to ask the clarifying questions to ensure understanding. Jocelyn brings integrity to all she does."'
            />
            <div className="p-5 m-5 md:flex container rounded-md mx-auto bg-rem-tan">
                <img src={avatar} className="rounded-full max-w-60 max-h-60 md:float-right" alt="cartoon avatar of Jocelyn" />
                <div className="flex-col">
                    <p className="pt-5 pl-5 text-2xl font-light">"Jocelyn is knowledgeable, articulate, and a pleasure to work with. She never hesitates to be the leader among her peers."</p>
                    <p className="pt-5 pl-5 text-3xl font-extralight">Web developer leveraging a background in education to provide a unique perspective on how end-users interact with websites and software platforms.</p>
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

function MotionDesigns(props) {
    const { preview, alt, website, text1 } = props;

    return (
        <div className="mt-5 mx-5 w-72">
            <div className="p-3 justify-items-center bg-rem-gray rounded-xl shadow-sm">
                <a href={website} target="_blank" rel="noreferrer">
                    <img className="w-64 h-40 object-cover rounded-t-md hover:scale-105 transition-all transform duration-400" src={preview} alt={alt} />
                    <div className="mt-2">
                        <p className="text-sm mt-3 pb-3 text-gray-700">{text1}</p>
                    </div>
                </a>
            </div>
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
                <div className="md: grid p-2 lg:grid-cols-3 md:grid-cols-1 mx-auto place-items-center">
                    <WebPortfolio
                        preview={bookworm}
                        alt="preview of bookworm app"
                        website="https://book-worm-clm.herokuapp.com/"
                        title="Bookworm"
                        githubRepo="https://github.com/santipalacios2002/project-3"
                        text1="Role: UI/UX lead, logo design, React programming"
                    />
                    <WebPortfolio
                        preview={beSeated}
                        alt="preview of be seated app"
                        website="https://beseated.herokuapp.com/"
                        title="Be|Seated"
                        githubRepo="https://github.com/jocelynrem/project-2"
                        text1="Role: UI/UX lead, logo design"
                    />
                    <WebPortfolio
                        preview={pourDecisions}
                        alt="preview of pour decisions app"
                        website="https://thompsonel11.github.io/Project_1/"
                        title="Pour Decisions"
                        githubRepo="https://github.com/jocelynrem/Project_1"
                        text1="Role: UI/UX lead, API, & Javascript"
                    />
                    <WebPortfolio
                        preview={fitnessTracker}
                        alt="preview of fitness tracker app with graph results"
                        website="https://workout-tracker-jremington.herokuapp.com/stats"
                        title="Fitness Tracker"
                        githubRepo="https://github.com/jocelynrem/workoutTracker"
                        text1="Role: Backend using MongoDB"
                    />

                    <WebPortfolio
                        preview={codeQuiz}
                        alt="preview of code quiz app"
                        website="https://jocelynrem.github.io/Code-Quiz/"
                        title="Code Quiz"
                        githubRepo="https://github.com/jocelynrem/Code-Quiz"
                        text1="Role: UI/UX, Javascript"
                    />
                    <WebPortfolio
                        preview={notetaker}
                        alt="preview of notetaker app"
                        website="https://calm-fortress-51934.herokuapp.com/notes"
                        title="Notetaker"
                        githubRepo="https://github.com/jocelynrem/note_taker"
                        text1="Role: Backend- Express.js & JSON files"
                    />

                </div>
            </div>
            <div className="my-3 container mx-auto">
                <h1 className="font-thin text-4xl ml-5 mt-5">Motion Portfolio</h1>
                <div className="md: grid p-2 lg:grid-cols-3 md:grid-cols-1 mx-auto place-items-center">
                    <MotionDesigns
                        preview={traffic}
                        alt="traffic direction map"
                        website="https://youtu.be/VNO061c9utA"
                        text1="Created using Illustrator, After Effects, & Premier Pro"
                    />
                </div>
            </div>
            <div className="my-3 container mx-auto">
                <h1 className="font-thin text-4xl ml-5 mt-5">Print Portfolio</h1>
                <div className="grid md:pb-16 p-2 md:grid-cols-4 md:justify-evenly mx-auto place-items-center">
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
            <div className="p-5 m-5 md:flex container rounded-md mx-auto bg-rem-tan">
                <a href="https://drive.google.com/file/d/1piJC3by8EQYZoWRueZG6TMRDpIl5P7cg/view?usp=sharing" target="_blank" rel="noreferrer"><img src={resume} className="w-screen object-cover hover:scale-105 transition-all transform duration-400 rounded-md max-w-60 max-h-60 md:float-right" alt="resume" /></a>
                <div className="flex-col">
                    <h1 className=" pt-2 pl-5 text-3xl">SKILLS:</h1>
                    <p className=" pt-2 pl-5 font-thin text-3xl">| Photoshop | Javascript | HTML5 | CSS | React |  Bootstrap | Tailwind | Adobe XD | MySQL | MongoDB | GraphQL</p>
                </div>

            </div>


            <Footer />
        </div >
    )
}
