import Image from "next/image"
import halfLeaf from '@/../public/plants/halfLeaf.png'


const Maintenance = () => {
    return <>
        <div className="pt-[40px] pb-6 md:pb-[80px] px-4 md:px-12" id="maintenance">
            <div className="2xl:max-w-[1280px] w-full lg:w-[75%] mx-auto">

                <h1 className="text-center text-2xl md:text-3xl pb-5 lg:pb-10 tracking-[8px]">MAINTENANCE</h1>
                <p className="text-center">With our long term plant rental and maintenance service, you'll have all the joy of having plants without any of the hassle. It's like having your own personal plant caretaker, ensuring your green companions thrive and your space flourishes.
                </p>

                {/* MAINTENANCE */}
                <section className="flex flex-col md:flex-row md:mt-10">
                    {/* <div className="hidden md:block h-[100%] w-[30%] absolute top-0 left-0 opacity-50">
                        <Image src={palm} alt="img2" className="object-cover w-full h-full scale-50" />
                    </div> */}

                    <div className="flex flex-col md:flex-row">

                        <div className="p-5 mt-8 bg-secondary-green rounded-lg text-zinc-200">
                            <div className="border border-zinc-300 flex flex-col md:flex-row gap-2 text-center rounded-lg p-5">
                                <div className="">
                                    <h3 className="text-lg font-light pb-3">WATERING</h3>
                                    <p>We'll keep a close eye on your plants' hydration needs. No wilting or dry spells under our watch!</p>
                                </div>
                                <div className="">
                                    <h3 className="text-lg font-light pb-3">PRUNING</h3>
                                    <p>Plants need a little haircut now and then. We'll trim and shape them to maintain their health and appearance.</p>
                                </div>
                                <div className="">
                                    <h3 className="text-lg font-light pb-3">FERTILIZING</h3>
                                    <p>Just like we need our meals, plants need their nutrients. We'll make sure they're well-fed and happy.</p>
                                </div>
                                <div className="">
                                    <h3 className="text-lg font-light pb-3">PEST CONTROL</h3>
                                    <p> Unwanted visitors can be a bother. We'll monitor and manage any pests that might come knocking.</p>
                                </div>
                                <div className="">
                                    <h3 className="text-lg font-light pb-3">PLANT SWAP IF NEEDED</h3>
                                    <p>Sometimes, a plant might not be as happy in a spot as we hoped. If that's the case, we'll gladly switch it out for one that's a better fit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="absolute left-[-65px] z-10">
                    <Image src={halfLeaf} width={300} height={300} className="scale-125 opacity-75" />
                </div>
            </div >
        </div >

    </>
}

export default Maintenance