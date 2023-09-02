import Image from "next/image"
import monstera from '@/../public/plants/monstera.png'
import plantSmall from '@/../public/plantpng.png'
import hangingPlant from '@/../public/plants/HangingPlant1.png'


const Services = () => {
    return <>
        <div className="pt-[40px] pb-6 md:pb-[80px] px-4 md:px-12" id="services">
            <div className="2xl:max-w-[1280px] w-full lg:w-[75%] mx-auto">
                <div className="absolute left-[-90px]">
                    <Image src={hangingPlant} width={300} height={300} className="scale-125" />
                </div>

                <h1 className="text-center text-2xl md:text-3xl pb-5 lg:pb-10 tracking-[8px]">SERVICES</h1>
                <p className="text-center">We're all about adding that touch of green magic to your special moments and everyday spaces. We'll help you select the perfect plants and pots that match your style and space, whether it's an event, wedding or you just want to light up you office or restaurant.
                </p>

                <section className="flex gap-[75px] mt-5 lg:mt-10 text-zinc-200 relative">
                    {/* left part */}
                    <div className="flex flex-col lg:w-[90%] justify-evenly items-center">
                        {/* top vertical */}
                        <div className="p-4 lg:mb-8 rounded-lg border-zinc-300 bg-secondary-green">
                            <div className="flex items-center pb-2">
                                <Image src={plantSmall} alt="img1" className="object-cover w-[50px] h-[50px] " />
                                <h3 className="text-xl">LONG TERM PLANT RENTAL</h3>
                            </div>
                            <p>Want to keep that green vibe alive for the long haul?
                                <br />
                                Our long term plant rental service is just what you need. Our job doesn't end there – we'll get those greens settled in their new home and keep them thriving through a range of meticulous maintenance services.</p>
                        </div>

                        {/* bottom horizontal */}
                        <div className="flex flex-col pt-4 xl:pt-0 lg:flex-row gap-4 lg:gap-8 justify-between">
                            {/* first */}
                            <div className="flex flex-col flex-1 p-4 rounded-lg border-zinc-300 bg-secondary-green">
                                <div className="flex items-center pb-2">
                                    <Image src={plantSmall} alt="img1" className="object-cover w-[50px] h-[50px]" />
                                    <h3 className="text-xl">SHORT TERM</h3>
                                </div>
                                <p>Planning an event or a wedding? We've got you covered!
                                    <br />
                                    And don't worry about a thing – we'll handle their installation and take them back when the event is over.</p>
                            </div>
                            {/* second */}
                            <div className="flex flex-col flex-1 p-4 rounded-lg border-zinc-300 bg-secondary-green">
                                <div className="flex items-center pb-2">
                                    <Image src={plantSmall} alt="img1" className="object-cover w-[50px] h-[50px]" />
                                    <h3 className="text-xl">INDOOR DESIGN</h3>
                                </div>
                                <p>Every space tells a story, and we're here to help you tell it in green.
                                    <br />
                                    Whether it's a cozy corner or an expansive area, we'll assist you in picking out the plants that'll thrive and bring out the best in your space.</p>
                            </div>
                        </div>

                    </div>

                    {/* right part */}
                    <div className="hidden lg:block w-[70%] max-h-[600px]">
                        <Image src={monstera} alt="img2" width={300} height={200} className="absolute h-[150%] w-[60%] top-[-10%]" />
                    </div>

                </section>

            </div>
        </div>

    </>
}

export default Services