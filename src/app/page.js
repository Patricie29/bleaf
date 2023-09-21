import Main from '@/sections/Main'
import Navbar from '@/sections/Navbar'
import About from '@/sections/About'
import Services from '@/sections/Services'
import Footer from '@/sections/Footer'
import Contact from '@/sections/Contact'


export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
