import { useNavigate } from "react-router-dom";
import SecondaryButton from "../../button/SecondaryButton";

const EnhanceCommunity = () => {
    const navigate = useNavigate();
    return (
        <section className="max-w-5xl mx-auto px-4 py-12 my-12">
            <div className="flex flex-col gap-10 items-center justify-center bg-primary rounded-xl p-12" >
                <h2 className="text-2xl sm:text-3xl md:text-4xl  font-bold text-center text-white">
                    Enhance Your Community Today
                </h2>
                <p className="text-white text-center">
                    Partner with us to create a well-managed, vibrant community that residents are proud to call home.
                </p>
                <div className="w-full text-center">
                    <SecondaryButton label="View All Services" onClick={() => navigate("/services")} />
                </div>
            </div>

        </section>
    )
}

export default EnhanceCommunity