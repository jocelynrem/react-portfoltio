import React from 'react'
import Header from './header';
import Form from './form';
import Footer from './footer';
import avatar from './images/IMG_7504.JPG'

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
                    <p className=" pt-10 pl-5 text-3xl font-semibold">| Javascript | HTML5 | CSS | React |  Bootstrap | Tailwind </p>
                    <p className="pt-10 pl-5 text-2xl font-extralight">"Jocelyn is knowledgeable, articulate, and a pleasure to work with. She never hesitates to be the leader among her peers."</p>
                    </div>
                    
                </div>
            <Footer />
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
            <Footer />
        </div>
    )
}
