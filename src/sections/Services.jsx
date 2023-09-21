import Image from "next/image"
import interiorPlant from '@/../public/coffeePlants.jpeg'
import shortTermPlant from '@/../public/short-term.jpeg'
import longTermPlant from '@/../public/long-term.jpeg'

const Services = () => {
    return <>
        <div className="pt-[40px] pb-6 px-4 md:px-12" id="services">
            <div className="2xl:max-w-[1280px] w-full lg:w-[75%] mx-auto">

                {/* SERVICES */}
                <h1 className="text-center mb-7 md:mb-[80px] text-5xl md:text-7xl tracking-[2px]">Services</h1>
                {/* LONG TERM AND MAINTENANCE */}
                <section className="md:mb-[60px] flex flex-col" >
                    {/* LONG TERM RENTAL */}
                    <div className="mb-5 md:mb-[50px]">
                        <div className="flex pb-2 md:justify-center">

                            <h3 className="text-[21px] md:text-4xl mb-3 md:mb-[30px]">Long-Term Plant Rental & Maintenance </h3>
                        </div>
                        <p className="">Want to keep that green vibe alive for the long haul?
                            Our long term plant rental service is just what you need. Our job doesn&apos;t end there! We&apos;ll get those greens settled in their new home and keep them thriving through a range of meticulous maintenance services.<br />
                            With our long term plant rental and maintenance service, you&apos;ll have all the joy of having plants without any of the hassle. It&apos;s like having your own personal plant caretaker, ensuring your green companions thrive and your space flourishes.
                        </p>

                    </div>
                    {/* MAINTANACE */}
                    <div className="flex flex-col md:flex-row mb-5 md:mb-[50px] md:pt-10 items-center md:gap-20" id="maintenance">
                        <div className="flex flex-col gap-4 md:gap-9 mb-8 md:mb-0 md:w-[70%]">
                            <div>
                                <h3 className="text-2xl md:text-[32px] font-light md:pb-3">Watering</h3>
                                <p className="text-[16px] md:text-[18px]">We&apos;ll keep a close eye on your plants&apos; hydration needs. No wilting or dry spells under our watch!</p>
                            </div>
                            <div className="">
                                <h3 className="text-2xl md:text-[32px] font-light md:pb-3">Pruning</h3>
                                <p className="text-[16px] md:text-[18px]">Plants need a little haircut now and then. We&apos;ll trim and shape them to maintain their health and appearance.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-[32px] font-light md:pb-3">Fertilizing</h3>
                                <p className="text-[16px] md:text-[18px]">Just like we need our meals, plants need their nutrients. We&apos;ll make sure they&apos;re well-fed and happy.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-[32px] font-light md:pb-3">Pest Control</h3>
                                <p className="text-[16px] md:text-[18px]"> Unwanted visitors can be a bother. We&apos;ll monitor and manage any pests that might come knocking.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-[32px] font-light md:pb-3">Plant Swap</h3>
                                <p className="text-[16px] md:text-[18px]">Sometimes, a plant might not be as happy in a spot as we hoped. If that&apos;s the case, we&apos;ll gladly switch it out for one that&apos;s a better fit.</p>
                            </div>
                        </div>
                        <div className="w-[70%]">
                            <Image src={longTermPlant} className="w-full object-fill" />
                        </div>
                    </div>
                </section>

                {/* SHORT TERM */}
                <section className="flex flex-col md:flex-row-reverse items-center relative mt-10 md:mt-0">
                    <div className="bg-secondary-green h-5 absolute -top-8 md:top-8 z-[-10] w-[100vw] left-[50%] transform -translate-x-[50%]" />
                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                        <h3 className="text-2xl md:text-[32px] font-semibold mb-2 md:mb-8">Short Term Plant Rental</h3>
                        <p>
                            Planning an event or a wedding? We&apos;ve got you covered!
                            <br />
                            And don&apos;t worry about a thing – we&apos;ll handle their installation, ensuring everything runs smoothly, and take them back when the event is over, leaving you stress-free and able to enjoy every moment.
                        </p>
                    </div>
                    <div className="bg-secondary-green h-5 absolute bottom-8 z-[-10] w-[100vw] left-[50%] transform -translate-x-[50%]" />
                    <div className="w-full md:w-1/2 md:ml-8 relative">
                        {/* Portrait Image for Short Term Plant Rental */}
                        <Image src={shortTermPlant} alt="shortterm-plant" width={500} height={500} className="top-0 md:relative w-full h-[400px] md:h-[500px] object-contain" />
                    </div>
                </section>
                {/* INTERIOR DESIGN */}
                <section className="flex flex-col md:flex-row py-8 px-4 relative">
                    <div className="w-full md:w-1/2 md:mt-16 mb-6 md:mb-0">
                        <h3 className="text-2xl md:text-[32px] font-semibold mb-2 md:mb-8">Interior Plant Design</h3>
                        <p>
                            Every space tells a unique story, and we&apos;re here to help you tell it in greenery. Whether it&apos;s a cozy corner, an expansive area, or even a barren room, we&apos;ll assist you in picking out the perfect plants that&apos;ll thrive and bring out the best in your space, transforming it into a lush and vibrant environment.
                        </p>
                    </div>
                    <div className="bg-secondary-green h-5 absolute bottom-16 md:bottom-24 z-[-10] w-[100vw] left-[50%] transform -translate-x-[50%]" />

                    <div className="w-full md:w-1/2 md:mr-8 relative">
                        {/* Portrait Image for Interior Plant Design */}
                        <Image src={interiorPlant} alt="shortterm-plant" width={500} height={500} className="bottom-8 md:relative h-[400px] md:h-[500px] object-contain" />
                    </div>
                </section>
            </div>
        </div>

    </>
}

export default Services