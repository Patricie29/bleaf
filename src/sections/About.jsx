import Image from "next/image"
import aboutpic from '@/../public/misa.jpeg'


const About = () => {
    return <>
        <div className="pt-[40px] pb-6 md:pb-[80px] px-4 md:px-12" id="about">
            <div className="2xl:max-w-[1280px] w-full md:w-[70%] mx-auto">
                <h1 className="text-center text-2xl md:text-3xl pb-5 lg:pb-8 tracking-[8px]">ABOUT</h1>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-[70%] z-30">
                        <p className="text-center">My name is Michaela and I'm thrilled to be sharing my green journey with you. From the time I was a little kid, I found myself drawn to the magic of plants, thanks to those cherished moments spent gardening with my wonderful grandparents. Those early days sowed the seeds of a lifelong passion that's now the heart and soul of my business.
                            <br />  <br />
                            I've transformed my love for greenery into a mission to bring nature's touch to every corner. There's something so incredibly rewarding about turning dull spaces into vibrant pockets of life. It's like sharing a secret – the kind that brings joy, freshness, and a breath of pure, natural beauty.
                            <br />  <br />

                            But it's not just about appearances. I wholeheartedly believe that greenery isn't just nice to look at; it's vital for our well-being too. It's like a breath of fresh air for the soul and adds a touch of tranquility to our busy lives.
                            <br />  <br />

                            So, welcome to my world of all things green! Let's talk plants, spaces, and the wonderful journey we're about to embark upon. Together, we'll make your surroundings burst with life and contribute to the ever-growing green tapestry of our town. 🌱🌿</p>

                    </div>
                    <div className="md:w-[40%] bg-secondary-green p-4 md:p-6 rounded-lg">
                        <Image src={aboutpic} width={400} height={500} className="object-cover w-full h-full" />

                    </div>
                </div>
            </div>
        </div>

    </>
}

export default About