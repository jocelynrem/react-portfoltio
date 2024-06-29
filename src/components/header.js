import React from 'react';
import Nav from './nav';
import headerImage from './images/80-NeutralBoho-Paper11.jpg';

const Header = (props) => {
    return (
        <div className="relative bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-5 md:pb-8 lg:max-w-2xl lg:w-full lg:pb-10">
                    <svg
                        className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                    <Nav />
                    <main className="mx-auto max-w-7xl px-6 sm:mt-6 sm:px-6 md:my-12 lg:my-15 lg:px-10">
                        <div className="sm:text-center lg:text-left">
                            <div className="text-4xl tracking-tight text-gray-900 font-extrabold sm:text-5xl md:text-6xl">
                                <span className={`inline-block ${props.colorOne} xl:inline`}>{props.titleOne}</span>{' '}
                                <span className={`inline-block ${props.colorTwo} xl:inline`}>{props.titleTwo}</span>
                            </div>
                            <p className="mt-3 text-base text-gray-500 pr-5 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto">
                                <div className="md:mt-8">
                                    {props.quote}
                                </div>
                                <div className="mt-2">
                                    {props.quoteTwo}
                                </div>
                            </p>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="h-10 w-full object-cover sm:h-10 md:h-20 lg:w-full lg:h-full"
                    src={headerImage}
                    alt="boho rainbow pattern" />
            </div>
            <div className="">
                <div className="border-t border-gray-200" />
            </div>
        </div>
    );
}

export default Header;
