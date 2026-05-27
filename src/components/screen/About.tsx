import AboutHero from "../sections/about/AboutHero"
import FounderHighlight from "../sections/about/FounderHighlight"
import JoinOur from "../sections/about/JoinOur"
import Mission from "../sections/about/Mission"
import OurStory from "../sections/about/OurStory"
import Counts from "../sections/owner/Counts"
import WhyChoose from "../sections/services/WhyChoose"

const About = () => {
    return (
        <div>
            <AboutHero />
            <FounderHighlight />
            <OurStory />
            <Mission />
            <WhyChoose />
            <Counts />
            <JoinOur />
        </div>
    )
}

export default About