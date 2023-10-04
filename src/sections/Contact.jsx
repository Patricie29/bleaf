'use client'
import emailjs from '@emailjs/browser'
import { useRef } from 'react';
import { Toaster, toast } from 'react-hot-toast';



const Contact = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        // Show loading toast while sending the email
        const loadingToastId = toast.loading('Sending message...');

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then(
                function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    // Update the loading toast with a success message
                    toast.success('Message Sent Successfully!', { id: loadingToastId });
                    form.current.reset();
                },
                function (error) {
                    console.log('FAILED...', error);
                    // Update the loading toast with an error message
                    toast.error('Message not sent, please try again!', { id: loadingToastId });
                }
            )
    }

    return <>
        <section className="mb-10 py-8 lg:py-[80px] px-4 mx-auto max-w-screen-md" id="contact">
            <h1 className="text-center text-4xl md:text-7xl pb-5 lg:pb-8 tracking-[2px]">Contact us</h1>
            <p className="mb-8 lg:mb-10 font-light text-center sm:text-xl">Contact us for more details and get a free quote, or give us a call on <span className="font-bold italic">0272 332 989</span></p>
            <div><Toaster /></div>

            <form ref={form} action="#" onSubmit={sendEmail} className="space-y-8 bg-secondary-green p-10">
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                    <input type="email" name="email" id="email" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#687872] focus:border-[#687872] block w-full p-2.5" placeholder="hello@bleaf.co.nz" required />
                </div>
                <div>
                    <label for="subject" className="block mb-2 text-sm font-medium text-white">Your Name</label>
                    <input type="text" name="name" id="name" className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-[#687872] focus:border-[#687872]" placeholder="Your name" required />
                </div>
                <div className="sm:col-span-2">
                    <label for="message" className="block mb-2 text-sm font-medium text-white dark:text-gray-400">Your message</label>
                    <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-white  rounded-lg shadow-sm border border-gray-300 focus:ring-[#687872] focus:border-[#687872]" placeholder="Let us know how we can help you..."></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg sm:w-fit bg-[#5f8976] hover:cursor-pointer hover:bg-[#687872] focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
            </form>

        </section>
    </>
}

export default Contact


