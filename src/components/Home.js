import React from 'react';
import Header from './header';
import Footer from './footer';
import avatar from './images/IMG_7518.JPG';

const Home = () => {
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

export default Home;
