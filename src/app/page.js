import Main from '@/sections/Main'
import Navbar from '@/sections/Navbar'
import About from '@/sections/About'
import Services from '@/sections/Services'
import Footer from '@/sections/Footer'
import Gallery from '@/sections/Gallery'
import Contact from '@/sections/Contact'
import Maintenance from '@/sections/Maintenance'


export default function Home() {
  return (
    <>
      <Navbar />
      <Main />

      <Gallery />
      <Services />
      <Maintenance />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
