import React from 'react';
import Header from './header';
import Footer from './footer';
import WebPortfolio from './WebPortfolio';
import caseStudy from './images/web/case-study.png';
import pourDecisions from './images/web/pour-decisions.png';
import codeQuiz from './images/web/code-quiz.png';
import traffic from './images/Afternoon-map.png';
import firstFriday from './images/FIRSTFRIDAY2.png';
import bluegrass from './images/SunriseBluegrass.png';
import chamber from './images/chamber-ad.png';
import murphy from './images/Murphy-Fam-Xmas.png';

const PrintDesigns = (props) => {
    return (
        <div className="print-design mb-20 md:mb-1 md:col-span-1">
            <img alt={props.alt} src={props.src} />
        </div>
    );
}

const MotionDesigns = (props) => {
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

const Portfolio = () => {
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
                        preview={caseStudy}
                        alt="preview of case study page"
                        website="https://uxfol.io/jocelynrem"
                        title="UX Case Study"
                        githubRepo="https://github.com/jocelynrem/"
                        text1="Role: UI/UX lead, Frontend Developer"
                    />
                    <WebPortfolio
                        preview={pourDecisions}
                        alt="preview of pour decisions app"
                        website="https://thompsonel11.github.io/Project_1/"
                        title="Pour Decisions"
                        githubRepo="https://github.com/jocelynrem/Project_1"
                        text1="Role: UI/UX lead, Full Stack Developer"
                    />
                    <WebPortfolio
                        preview={codeQuiz}
                        alt="preview of code quiz app"
                        website="https://jocelynrem.github.io/Code-Quiz/"
                        title="President Quiz"
                        githubRepo="https://github.com/jocelynrem/Code-Quiz"
                        text1="Role: UI/UX, Full Stack Developer"
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
    );
}

export default Portfolio;
