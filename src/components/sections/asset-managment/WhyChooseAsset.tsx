import chooseImg1 from "../../../../public/images/asset-managment/asset-choose-1.png";
import chooseImg2 from "../../../../public/images/asset-managment/asset-choose-2.png";
import chooseImg3 from "../../../../public/images/asset-managment/asset-choose-3.png";

const WhyChooseAsset = () => {
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
                <div className="flex flex-col items-center justify-start" >
                    <img src={chooseImg1} alt="Proven Results" className="hover:brightness-50 transition duration-300" />
                    <p className="text-[#0A0A0A] text-center font-bold mt-4">Strategic Expertise</p>
                    <p className="text-[#4A5565] text-center mt-2">
                        We combine deep market knowledge with data-driven insights to create tailored strategies that maximize asset value and long-term growth.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-start" >
                    <img src={chooseImg2} alt="Secure & Reliable" className="hover:brightness-50 transition duration-300" />
                    <p className="text-[#0A0A0A] text-center font-bold mt-4"> Proactive Asset Management </p>
                    <p className="text-[#4A5565] text-center mt-2">
                        Our team actively monitors performance, anticipates challenges, and takes swift action to protect your investments and capitalize on opportunities.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-start" >
                    <img src={chooseImg3} alt="Expert Team" className="hover:brightness-50 transition duration-300" />
                    <p className="text-[#0A0A0A] text-center font-bold mt-4">Proven Performance </p>
                    <p className="text-[#4A5565] text-center mt-2">  With a strong track record of delivering measurable results, we help clients increase returns, improve efficiency, and grow their portfolios with confidence. </p>
                </div>

            </div>
        </section>
    )
}

export default WhyChooseAsset