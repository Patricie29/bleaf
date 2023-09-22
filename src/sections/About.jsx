import Image from "next/image"
import aboutpic from '@/../public/misaPortret.jpeg'


const About = () => {
    return <>
        <div className="pt-[40px] pb-6 px-4 md:px-12" id="about">
            <div className="2xl:max-w-[1280px] w-full md:w-[70%] mx-auto">
                <h1 className="text-center text-5xl md:text-7xl mb-5 lg:pb-8 tracking-[2px]">About</h1>
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="md:w-[70%] z-30">
                        <p>My name is Michaela and I&apos;m thrilled to be sharing my green journey with you. From the time I was a little kid, I found myself drawn to the magic of plants, thanks to those cherished moments spent gardening with my wonderful grandparents. Those early days sowed the seeds of a lifelong passion that&apos;s now the heart and soul of my business.
                            <br />
                            I&apos;ve transformed my love for greenery into a mission to bring nature&apos;s touch to every corner. There&apos;s something so incredibly rewarding about turning dull spaces into vibrant pockets of life. It&apos;s like sharing a secret – the kind that brings joy, freshness, and a breath of pure, natural beauty.
                            <br />

                            But it&apos;s not just about appearances. I wholeheartedly believe that greenery isn&apos;t just nice to look at; it&apos;s vital for our well-being too. It&apos;s like a breath of fresh air for the soul and adds a touch of tranquility to our busy lives.
                            <br />

                            So, welcome to my world of all things green! Let&apos;s talk plants, spaces, and the wonderful journey we&apos;re about to embark upon. Together, we&apos;ll make your surroundings burst with life and contribute to the ever-growing green tapestry of our town. 🌱🌿</p>

                    </div>
                    <div className="md:w-[50%] bg-secondary-green p-2">
                        <Image src={aboutpic} width={400} height={500} alt='profile picture' className="object-cover w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default About