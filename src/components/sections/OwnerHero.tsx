import { useNavigate } from "react-router-dom"
import PrimaryRoundButton from "../button/PrimaryRoundButton"
import SecondaryRoundButton from "../button/SecondaryRoundButton"
import HeroSection from "../layout/HeroSection"

const OwnerHero = () => {
    const navigate = useNavigate();
    return (
        <HeroSection
            content={
                <div className="flex-1 flex px-4 items-center justify-center">
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="text-[32px] font-bold text-white leading-tight sm:text-[40px] md:text-[52px] lg:text-[64px]">
                            Smart Management For <br /> Residential Communities
                        </h1>
                        <p className="max-w-3xl mt-10 mx-auto text-white/90 text-sm sm:text-base md:text-lg">
                            Experience seamless community management with solutions designed to simplify daily living,
                            enhance communication, and create a more organized, connected, and stress-free environment for homeowners.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 my-4 mb-8 py-8 md:py-10 ">
                            <SecondaryRoundButton label="Homeowner Login" onClick={() => window.open("https://prosol.cincwebaxis.com/", "_blank")} />
                            <PrimaryRoundButton label="Explore Community Solutions" onClick={() => navigate('/commercial-owner')} />
                        </div>
                    </div>
                </div>
            }
        />
    )
}

export default OwnerHero