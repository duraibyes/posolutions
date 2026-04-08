import { useNavigate } from "react-router-dom";
import SecondaryButton from "../../button/SecondaryButton";

const EnhanceCommunity = () => {
    const navigate = useNavigate();
    return (
        <section className="max-w-5xl mx-auto px-4 py-12 my-12">
            <div className="flex flex-col gap-10 items-center justify-center bg-primary rounded-xl p-12" >
                <h2 className="text-2xl sm:text-3xl md:text-4xl  font-bold text-center text-white">
                    Build a Stronger, Better-Managed Community
                </h2>
                <p className="text-white text-center">
                    Partner with our experienced team to simplify operations, support your board, and create a thriving
                    community where residents feel valued, informed, and proud to call home.
                </p>
                <div className="w-full text-center">
                    <SecondaryButton label="Explore All Services" onClick={() => navigate("/services")} />
                </div>
            </div>

        </section>
    )
}

export default EnhanceCommunity