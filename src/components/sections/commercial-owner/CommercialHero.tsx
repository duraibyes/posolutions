import { useNavigate } from "react-router-dom"
import PrimaryRoundButton from "../../button/PrimaryRoundButton"
import SecondaryRoundButton from "../../button/SecondaryRoundButton"
import HeroSection from "../../layout/HeroSection"

const CommercialHero = () => {
    const navigate = useNavigate();
    return (
        <HeroSection
            content={
                <div className="flex-1 flex px-4 items-center justify-center">
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="text-[32px] font-bold text-white leading-tight sm:text-[40px] md:text-[52px] lg:text-[64px]">
                            Property & Facility <br />  Management for Commercial Assets
                        </h1>
                        <p className="max-w-3xl mt-10 mx-auto text-white/90 text-sm sm:text-base md:text-lg">
                            We help commercial property owners streamline operations, reduce costs,
                            and maximize asset performance through reliable, professional management solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 my-4 mb-8 py-8 md:py-10 ">
                            <SecondaryRoundButton label="Explore Services" onClick={() => navigate('/services')} />
                            <PrimaryRoundButton label="Request a Consultation" onClick={() => navigate('/request-proposal')} />
                        </div>
                    </div>
                </div>
            }
        />
    )
}

export default CommercialHero