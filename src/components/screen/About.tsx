import AboutHero from "../sections/about/AboutHero"
import JoinOur from "../sections/about/JoinOur"
import Mission from "../sections/about/Mission"
import OurStory from "../sections/about/OurStory"
import Team from "../sections/about/Team"
import Counts from "../sections/owner/Counts"
import WhyChoose from "../sections/services/WhyChoose"

const About = () => {
    return (
        <div>
            <AboutHero />
            <OurStory />
            <Mission />
            <Team />
            <WhyChoose />
            <Counts />
            <JoinOur />
        </div>
    )
}

export default About