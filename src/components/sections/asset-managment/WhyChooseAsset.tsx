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
                <div className="flex flex-col items-center justify-center" >
                    <img src={chooseImg1} alt="Proven Results" className="hover:brightness-50 transition duration-300" />
                    <p className="text-[#0A0A0A] text-center font-bold mt-4">Strategic Focus</p>
                    <p className="text-[#4A5565] text-center mt-2"> Data-driven strategies aligned with your investment goals and market opportunities. </p>
                </div>
                <div className="flex flex-col items-center justify-center" >
                    <img src={chooseImg2} alt="Secure & Reliable" className="hover:brightness-50 transition duration-300" />
                    <p className="text-[#0A0A0A] text-center font-bold mt-4"> Proactive Management </p>
                    <p className="text-[#4A5565] text-center mt-2"> Anticipating challenges and capitalizing on opportunities before they impact performance. </p>
                </div>
                <div className="flex flex-col items-center justify-center" >
                    <img src={chooseImg3} alt="Expert Team" className="hover:brightness-50 transition duration-300" />
                    <p className="text-[#0A0A0A] text-center font-bold mt-4"> Proven Results </p>
                    <p className="text-[#4A5565] text-center mt-2"> Track record of enhancing property values and delivering superior investment returns. </p>
                </div>

            </div>
        </section>
    )
}

export default WhyChooseAsset