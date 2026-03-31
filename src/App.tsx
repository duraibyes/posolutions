import Navbar from "./components/layout/Navbar"
import Expertise from "./components/sections/Expertise"
import Footer from "./components/sections/Footer"
import GetInTouch from "./components/sections/GetInTouch"
import Hero from "./components/sections/Hero"
import Partners from "./components/sections/Partners"
import Testimonial from "./components/sections/Testimonial"


function App() {

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Expertise />
      <Partners />
      <GetInTouch />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
