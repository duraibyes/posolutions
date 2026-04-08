import Certificate from "../sections/commercial-owner/Certificate"
import CommercialBenefitSection from "../sections/commercial-owner/CommercialBenefitSection"
import CommercialHero from "../sections/commercial-owner/CommercialHero"
import CommercialServices from "../sections/commercial-owner/CommercialServices"
import Designations from "../sections/commercial-owner/Designations"
import Counts from "../sections/owner/Counts"
import GetStarted from "../sections/owner/GetStarted"
import Testimonial from "../sections/Testimonial"

const CommercialOwner = () => {
    return (
        <div>
            <CommercialHero />
            <CommercialServices />
            <Designations />
            <Certificate />
            <CommercialBenefitSection />
            <Counts />
            <Testimonial />
            <GetStarted />
        </div>
    )
}

export default CommercialOwner