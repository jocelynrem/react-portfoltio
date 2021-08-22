import React from 'react'
import Header from '../header';
import Form from '../form';
import Footer from '../footer';

export default function Contact() {
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