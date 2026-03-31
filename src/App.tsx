import Navbar from "./components/layout/Navbar"
import Expertise from "./components/sections/Expertise"
import GetInTouch from "./components/sections/GetInTouch"
import Hero from "./components/sections/Hero"
import Partners from "./components/sections/Partners"


function App() {

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Expertise />
      <Partners />
      <GetInTouch />
    </div>
  )
}

export default App
