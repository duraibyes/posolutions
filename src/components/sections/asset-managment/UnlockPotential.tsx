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
                    Partner with our asset management experts to maximize value and achieve your investment objectives.
                </p>
                <div className="w-full text-center">
                    <SecondaryButton label="View All Services" onClick={() => navigate("/services")} />
                </div>
            </div>

        </section>
    )
}

export default UnlockPotential