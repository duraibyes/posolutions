import Expert1 from "../../../public/images/expert-1.png";
import Expert2 from "../../../public/images/expert-2.png";
import Expert3 from "../../../public/images/expert-3.png";
import Expert4 from "../../../public/images/expert-4.png";

const Expertise = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-4 xl:px-2 py-6 my-16 flex flex-col items-center justify-center">
            <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-[#0C0047]">
                    Our Expertise
                </h2>
                <p className="text-[#969696] text-center">Reliable property and community management services tailored to your needs.</p>
            </div>
            <div className="grid 
    grid-cols-1 
    sm:grid-cols-2 
    lg:grid-cols-4 
    gap-8 
    mt-10">
                <div className="flex flex-col items-center justify-center" >
                    <img src={Expert4} alt="Asset Management" className="hover:brightness-50 transition duration-300" />
                    <p className="text-[#343434] text-center font-bold mt-4">Asset Management</p>
                </div>
                <div className="flex flex-col items-center justify-center" >
                    <img src={Expert3} alt="Financial Recovery Services" className="hover:brightness-50 transition duration-300" />
                    <p className="text-[#343434] text-center font-bold mt-4"> 	Financial Recovery Services </p>
                </div>
                <div className="flex flex-col items-center justify-center" >
                    <img src={Expert2} alt="Association Management " className="hover:brightness-50 transition duration-300" />
                    <p className="text-[#343434] text-center font-bold mt-4"> Association Management </p>
                </div>
                <div className="flex flex-col items-center justify-center" >
                    <img src={Expert1} alt="Real Estate Brokerage Services " className="hover:brightness-50 transition duration-300" />
                    <p className="text-[#343434] text-center font-bold mt-4"> Real Estate Brokerage Services </p>
                </div>
            </div>
        </section>
    )
}

export default Expertise