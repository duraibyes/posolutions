import PrimaryRoundButton from "../../button/PrimaryRoundButton"
import SecondaryRoundButton from "../../button/SecondaryRoundButton"
import HeroSection from "../../layout/HeroSection"

const ContactHero = () => {
    return (
        <HeroSection
            content={
                <div className="flex-1 flex px-4 items-center justify-center">
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="text-[32px] font-bold text-white leading-tight sm:text-[40px] md:text-[52px] lg:text-[64px]">
                            Contact Us
                        </h1>
                        <p className="max-w-3xl mt-10 mx-auto text-white/90 text-sm sm:text-base md:text-lg">
                            Get in touch with our team of experts. We're here to help you achieve your asset management goals.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 my-4 mb-8 py-8 md:py-10 ">
                            <SecondaryRoundButton label="Residential Services" />
                            <PrimaryRoundButton label="Commercial Services" />
                        </div>
                    </div>
                </div>
            }
        />
    )
}

export default ContactHero