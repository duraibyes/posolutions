import { useNavigate } from "react-router-dom";
import SecondaryButton from "../../button/SecondaryButton"

const UnlockPotential = () => {
    const navigate = useNavigate();
    return (
        <section className="max-w-5xl mx-auto px-4 py-12 my-12">
            <div className="flex flex-col gap-10 items-center justify-center bg-primary rounded-xl p-12" >
                <h2 className="text-2xl sm:text-3xl md:text-4xl  font-bold text-center text-white">
                    Unlock Your Portfolio's Full Potential
                </h2>
                <p className="text-white text-center">
                    Take the next step toward smarter asset management. Our experts will help you increase returns,
                    streamline operations, and build a resilient, high-performing portfolio tailored to your long-term goals.
                </p>
                <div className="w-full text-center">
                    <SecondaryButton label="Explore Our Services" onClick={() => navigate("/services")} />
                </div>
            </div>

        </section>
    )
}

export default UnlockPotential