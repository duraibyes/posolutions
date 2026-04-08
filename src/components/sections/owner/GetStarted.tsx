import { useNavigate } from "react-router-dom";
import SecondaryButton from "../../button/SecondaryButton"

const GetStarted = () => {
    const navigate = useNavigate();
    return (
        <section className="max-w-5xl mx-auto px-4 py-12 my-12">
            <div className="flex flex-col gap-10 items-center justify-center bg-primary rounded-xl p-12" >
                <h2 className="text-2xl sm:text-3xl md:text-4xl  font-bold text-center text-white">
                    Ready to Get Started?
                </h2>
                <p className="text-white text-center">
                    Partner with POSolutions to unlock smarter asset management, maximize returns,
                    and achieve long-term financial growth with confidence.
                </p>
                <div className="w-full text-center">
                    <SecondaryButton label="Schedule Your Free Consultation" onClick={() => navigate('/contact')} />
                </div>
            </div>

        </section>
    )
}

export default GetStarted