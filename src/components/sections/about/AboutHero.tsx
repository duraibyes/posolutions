import HeroSection from '../../layout/HeroSection'
import SecondaryRoundButton from '../../button/SecondaryRoundButton'
import PrimaryRoundButton from '../../button/PrimaryRoundButton'

const AboutHero = () => {
    return (
        <HeroSection
            content={
                <div className="flex-1 flex px-4 items-center justify-center">
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="text-[32px] font-bold text-white leading-tight sm:text-[40px] md:text-[52px] lg:text-[64px]">
                            About POSolutions
                        </h1>
                        <p className="max-w-3xl mt-10 mx-auto text-white/90 text-sm sm:text-base md:text-lg">
                            Leading the way in asset management with integrity, expertise, and a commitment to our clients' success since 2001.
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

export default AboutHero