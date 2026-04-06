import { useNavigate } from "react-router-dom"
import SecondaryRoundButton from "../../button/SecondaryRoundButton"
import HeroSection from "../../layout/HeroSection"

const AssetHero = () => {
    const navigate = useNavigate();
    return (
        <HeroSection
            content={
                <div className="flex-1 flex px-4 items-center justify-center">
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="text-[32px] font-bold text-white leading-tight sm:text-[40px] md:text-[52px] lg:text-[64px]">
                            Asset Management
                        </h1>
                        <p className="max-w-3xl mt-10 mx-auto text-white/90 text-sm sm:text-base md:text-lg">
                            Comprehensive asset management services to maximize the value and performance of your property portfolio through strategic planning and expert oversight.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 my-4 mb-8 py-8 md:py-10 ">
                            <SecondaryRoundButton label="Get Started" onClick={() => navigate('/commercial-owner')} />
                        </div>
                    </div>
                </div>
            }
        />
    )
}

export default AssetHero