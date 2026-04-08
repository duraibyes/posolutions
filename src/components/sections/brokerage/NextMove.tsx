import { useNavigate } from "react-router-dom";
import SecondaryButton from "../../button/SecondaryButton";

const NextMove = () => {
    const navigate = useNavigate();
    return (
        <section className="max-w-5xl mx-auto px-4 py-12 my-12">
            <div className="flex flex-col gap-10 items-center justify-center bg-primary rounded-xl p-12" >
                <h2 className="text-2xl sm:text-3xl md:text-4xl  font-bold text-center text-white">
                    Ready to Take the Next Step in Real Estate?
                </h2>
                <p className="text-white text-center">
                    Whether you're buying, selling, or leasing, our expert team is here to guide you through every step—helping you make confident decisions and achieve the best possible results.
                </p>
                <div className="w-full text-center">
                    <SecondaryButton label="Explore All Services" onClick={() => navigate("/services")} />
                </div>
            </div>

        </section>
    )
}

export default NextMove