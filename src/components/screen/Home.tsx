import Expertise from "../sections/Expertise"
import GetInTouch from "../sections/GetInTouch"
import Hero from "../sections/Hero"
import Partners from "../sections/Partners"
import Testimonial from "../sections/Testimonial"

const Home = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <Expertise />
            <Partners />
            <GetInTouch />
            <Testimonial />
        </div>
    )
}

export default Home