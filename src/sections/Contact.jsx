'use client'


const Contact = () => {
    return <>
        <section className="mb-10 py-8 lg:py-[80px] px-4 mx-auto max-w-screen-md" id="contact">

            <h1 className="text-center text-2xl md:text-3xl pb-5 lg:pb-8 tracking-[8px]">CONTACT US</h1>
            <p className="mb-8 lg:mb-10 font-light text-center sm:text-xl">Contact us for more details and get a free quote.</p>

            <form action="#" className="space-y-8 bg-secondary-green p-10 rounded-lg">
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-zinc-200">Your email</label>
                    <input type="email" id="email" className="shadow-sm bg-zinc-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#013800] focus:border-[#013800] block w-full p-2.5" placeholder="hello@bleaf.co.nz" required />
                </div>
                <div>
                    <label for="subject" className="block mb-2 text-sm font-medium text-zinc-200">Your name</label>
                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-zinc-200 rounded-lg border border-gray-300 shadow-sm focus:ring-[#013800] focus:border-[#013800]" placeholder="Let us know who you are" required />
                </div>
                <div className="sm:col-span-2">
                    <label for="message" className="block mb-2 text-sm font-medium text-zinc-200 dark:text-gray-400">Your message</label>
                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-zinc-200  rounded-lg shadow-sm border border-gray-300 focus:ring-[#013800] focus:border-[#013800]" placeholder="Let us know how we can help you"></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-zinc-200 rounded-lg sm:w-fit bg-[#96aca3] hover:outline hover:outline-[#013800] focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
            </form>
        </section>
    </>
}

export default Contact