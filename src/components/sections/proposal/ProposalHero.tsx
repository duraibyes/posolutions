import { useNavigate } from 'react-router-dom'
import PrimaryRoundButton from '../../button/PrimaryRoundButton'
import SecondaryRoundButton from '../../button/SecondaryRoundButton'
import HeroSection from '../../layout/HeroSection'

const ProposalHero = () => {
    const navigate = useNavigate();
    return (
        <HeroSection
            content={
                <div className="flex-1 flex px-4 items-center justify-center">
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="text-[32px] font-bold text-white leading-tight sm:text-[40px] md:text-[52px] lg:text-[64px]">
                            Request Proposal
                        </h1>
                        <p className="max-w-2xl mt-10 mx-auto text-white/90 text-sm sm:text-base md:text-lg leading-tight">
                            Share your property goals and requirements with us, and our team will craft a tailored management solution designed to maximize value, improve efficiency, and deliver long-term results.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 my-4 mb-8 py-8 md:py-10 ">
                            <SecondaryRoundButton label="Residential Services" onClick={() => navigate('/owner')} />
                            <PrimaryRoundButton label="Commercial Services" onClick={() => navigate('/commercial-owner')} />
                        </div>
                    </div>
                </div>
            }
        />
    )
}

export default ProposalHero