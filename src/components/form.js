import { validateEmail } from './helpers';
import React, { useState } from 'react';


export default function Form() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
          } else if (inputType) {
            setName(inputValue);
          } else {
            setMessage(inputValue);
          }
    }

    const HandleFormSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        setName('');
        setMessage('');
        setEmail('');
    }


    return (
        <>
            <div className="bg-gray-100">
                <div className="p-5 my-5 md:grid md:grid-cols-6 md:gap-6 container justify-center mx-auto">
                    <div className="md:col-span-1"></div>

                    <div className="mt-5 md:mt-0 md:col-span-4">
                        <form name="contact" method="POST" data-netlify="true">
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="text-2xl bg-rem-tan p-2 text-center tracking-tight text-gray-600 font-extrabold sm:text-2xl md:text-3xl">
                                    <a href="mailto:jocelynrem@gmail.com"><span className="inline-block px-5 py-2 xl:inline underline hover:text-rem-blue">jocelynrem@gmail.com</span></a>{' '}
                                    <span className="inline-block px-5 py-2 xl:inline">910-987-6202</span>
                                </div>
                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="col-span-3 sm:col-span-2">
                                            <label htmlFor="name" className="block text-md font-medium text-gray-700">
                                                Full name
                                            </label>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={handleInputChange}
                                                placeholder="Full Name"
                                                name="name"
                                                autoComplete="name"
                                                className="mt-1 focus:ring-rem-tan focus:border-rem-tan block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="col-span-3 sm:col-span-2">
                                            <label htmlFor="email-address" className="block text-md font-medium text-gray-700">
                                                Email
                                            </label>
                                            <input
                                                value={email}
                                                onChange={handleInputChange}
                                                type="email"
                                                name="email"
                                                autoComplete="email"
                                                placeholder="email"
                                                className="mt-1 focus:ring-rem-tan focus:border-rem-tan block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="col-span-3 sm:col-span-2">
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                                Message
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    value={message}
                                                    onChange={handleInputChange}
                                                    name="message"
                                                    rows={3}
                                                    className="shadow-sm focus:ring-rem-tan focus:border-rem-tan mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                    placeholder="Dear Jocelyn, you are awesome."
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="px-4 py-3 bg-rem-tan text-right text-gray-700 sm:px-6">
                                    <button type="submit" className="btn" onClick={HandleFormSubmit}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}