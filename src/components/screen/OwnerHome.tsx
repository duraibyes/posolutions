import BenefitSection from "../sections/owner/BenefitSection"
import Counts from "../sections/owner/Counts"
import GetStarted from "../sections/owner/GetStarted"
import OwnerHero from "../sections/OwnerHero"
import Services from "../sections/Services"
import Testimonial from "../sections/Testimonial"

const OwnerHome = () => {
    return (
        <div>
            <OwnerHero />
            <Services />
            <BenefitSection />
            <Counts />
            <Testimonial />
            <GetStarted />
        </div>
    )
}

export default OwnerHome