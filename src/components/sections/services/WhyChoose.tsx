import chooseImg1 from "../../../../public/images/services/choose-1.png";
import chooseImg2 from "../../../../public/images/services/choose-2.png";
import chooseImg3 from "../../../../public/images/services/choose-3.png";

const WhyChoose = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-4 xl:px-2 py-6 my-16 flex flex-col items-center justify-center">
            <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-[#0C0047]">
                    Why Choose POSolutions
                </h2>
            </div>
            <div className="grid 
    grid-cols-1 
    sm:grid-cols-2 
    lg:grid-cols-3
    gap-8 
    mt-10">
                <div className="flex flex-col items-center justify-center" >
                    <img src={chooseImg1} alt="Proven Results" className="hover:brightness-50 transition duration-300" />
                    <p className="text-[#0A0A0A] text-center font-bold mt-4">Proven Results</p>
                    <p className="text-[#4A5565] text-center mt-2">
                        Our performance speaks for itself. We deliver consistent, measurable results by maximizing returns, improving efficiency, and driving long-term asset value.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center" >
                    <img src={chooseImg2} alt="Secure & Reliable" className="hover:brightness-50 transition duration-300" />
                    <p className="text-[#0A0A0A] text-center font-bold mt-4"> Secure & Reliable </p>
                    <p className="text-[#4A5565] text-center mt-2">
                        We prioritize your peace of mind with dependable service, advanced security practices, and systems designed to keep your assets safe, stable, and accessible.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center" >
                    <img src={chooseImg3} alt="Expert Team" className="hover:brightness-50 transition duration-300" />
                    <p className="text-[#0A0A0A] text-center font-bold mt-4"> Expert Team </p>
                    <p className="text-[#4A5565] text-center mt-2">
                        Backed by experienced professionals, we combine industry knowledge, strategic thinking, and hands-on execution to help you achieve your goals with confidence.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default WhyChoose