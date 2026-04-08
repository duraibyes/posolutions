import { useNavigate } from "react-router-dom";
import SecondaryButton from "../../button/SecondaryButton"

const GetStarted = () => {
    const navigate = useNavigate();
    return (
        <section className="max-w-5xl mx-auto px-4 py-12 my-12">
            <div className="flex flex-col gap-10 items-center justify-center bg-primary rounded-xl p-12" >
                <h2 className="text-2xl sm:text-3xl md:text-4xl  font-bold text-center text-white">
                    Ready to Simplify Your Community Management?
                </h2>
                <p className="text-white text-center">
                    Let POSolutions handle the complexities of property and community management,
                    so you can enjoy a more organized, stress-free, and well-maintained living environment.
                </p>
                <div className="w-full text-center">
                    <SecondaryButton label="Schedule Your Free Consultation" onClick={() => navigate('/contact')} />
                </div>
            </div>

        </section>
    )
}

export default GetStarted