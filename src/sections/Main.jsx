import Image from 'next/image';
import logo from '@/../public/logo.png'
import monstera from '@/../public/mainPage/monstera.jpeg'
import sofa from '@/../public/mainPage/sofa.jpeg'
import hangingPlants from '@/../public/mainPage/hangingPlants.avif'


const Main = () => {
    return <>
        <div id="default-carousel" className="relative w-full z-10" data-carousel="static">
            {/* <!-- Carousel wrapper --> */}
            <div className="relative h-[300px] overflow-hidden md:h-[640px]">
                {/* <!-- Item 1 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt='img1' src={monstera} width={2000} height={1000} />

                    {/* LOGO */}
                    <div className='absolute top-1/2 left-1/2 md:mt-5 transform -translate-x-1/2 -translate-y-1/2'>

                        <div className='border border-slate-50 mt-[20px] md:mt-8 rounded-full p-[12px] md:p-[40px] bg-secondary-green  border-opacity-20'>
                            <Image src={logo} className='h-[120px] md:h-[320px] w-[120px] md:w-[320px] object-contain' alt='logo' />
                        </div>

                    </div>

                </div>
                {/* <!-- Item 2 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt='img2' src={sofa} width={2000} height={1000} />
                </div>
                {/* <!-- Item 3 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt='img3' src={hangingPlants} width={2000} height={1000} />
                </div>
                {/* <!-- Item 4 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt='img4' src={monstera} width={2000} height={1000} />
                    {/* LOGO */}
                    <div className='absolute top-1/2 left-1/2 md:mt-5 transform -translate-x-1/2 -translate-y-1/2'>

                        <div className='border border-slate-50 mt-[20px] md:mt-8 rounded-full p-[12px] md:p-[40px] bg-secondary-green bg-opacity-40 border-opacity-20'>
                            <Image src={logo} className='h-[120px] md:h-[320px] w-[120px] md:w-[320px] object-contain' alt='logo' />
                        </div>
                    </div>
                </div>
                {/* <!-- Item 5 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt='img5' src={sofa} width={2000} height={1000} />
                </div>
                {/* <!-- Item 6 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt='img5' src={hangingPlants} width={2000} height={1000} />
                </div>
            </div>
            {/* <!-- Slider indicators --> */}
            {/* <div className="absolute z-30 flex space-x-5 -translate-x-1/2 bottom-[-1px] md:bottom-2 bg-secondary-green md:bg-transparent left-1/2  p-2 rounded-2xl">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div> */}
            {/* <!-- Slider controls --> */}
            <button type="button" className="absolute top-5 md:top-10 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-5 md:top-10 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
                    <svg className="w-4 h-4 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
        <div className="py-4 md:py-8 px-4 md:px-12">
            <div className="2xl:max-w-[1280px] w-full md:w-[70%] mx-auto">
                <p className="text-center text-[18px] md:text-[24px] italic">We&apos;re all about adding that touch of green magic to your special moments and everyday spaces. We&apos;ll help you select the perfect plants and pots that match your style and space, whether it&apos;s an event, wedding or you just want to light up you office or restaurant.
                </p>
            </div>
        </div>
    </>
}

export default Main
