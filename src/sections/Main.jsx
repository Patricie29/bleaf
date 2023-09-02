import logo from '@/../public/logo.png'
import Image from 'next/image';
import monsteraImg from '@/../public/monstera.jpeg'


const Main = () => {
    return <section id='home'>
        <div id="default-carousel" className="relative w-full z-10" data-carousel="static">
            {/* <!-- Carousel wrapper --> */}
            <div className="relative h-[350px] overflow-hidden md:h-[530px]">
                {/* <!-- Item 1 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt='img1' src={monsteraImg} width={2000} height={1000} />
                    <h2 className='text-xl md:text-3xl font-light italic text-zinc-200 absolute bottom-[25%] left-[15%]'>Bring nature into your space</h2>
                </div>
                {/* <!-- Item 2 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt='img2' src='https://images.unsplash.com/photo-1636525653613-2a3a05c00759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80' width={2000} height={1000} />
                </div>
                {/* <!-- Item 3 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt='img3' src='https://images.unsplash.com/photo-1530049478161-0780526964f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80' width={2000} height={1000} />
                </div>
                {/* <!-- Item 4 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt='img4' src='https://images.unsplash.com/photo-1636525653613-2a3a05c00759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80' width={2000} height={1000} />
                </div>
                {/* <!-- Item 5 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt='img5' src='https://images.unsplash.com/photo-1530049478161-0780526964f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80' width={2000} height={1000} />
                </div>
            </div>
            {/* <!-- Slider indicators --> */}
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
            {/* <!-- Slider controls --> */}
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
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
                <p className="text-center">From weddings to events, offices to restaurants, and your homes, our expertise in plant selection and design ensures every setting thrives with vitality. Whether you are seeking a touch of nature's elegance for a special occasion or a long-term green companion, we are here to deliver top-quality essence of nature right to your doorstep.🌱🌿</p>
            </div>
        </div>
    </section>
}

export default Main