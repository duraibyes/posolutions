import Counts from "../sections/owner/Counts"
import GetStarted from "../sections/owner/GetStarted"
import AssetService from "../sections/services/AssetService"
import EstateService from "../sections/services/EstateService"
import FinanceService from "../sections/services/FinanceService"
import OurServices from "../sections/services/OurServices"
import ServiceHero from "../sections/services/ServiceHero"
import WhyChoose from "../sections/services/WhyChoose"
import Testimonial from "../sections/Testimonial"

const Services = () => {
    return (
        <div>
            <ServiceHero />
            <OurServices />
            <FinanceService />
            <AssetService />
            <EstateService />
            <WhyChoose />
            <Counts />
            <Testimonial />
            <GetStarted />
        </div>
    )
}

export default Services