import MissionImg1 from "../../../../public/images/about/mission-1.png";
import MissionImg2 from "../../../../public/images/about/mission-2.png";
import MissionImg3 from "../../../../public/images/about/mission-3.png";

const Mission = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-4 xl:px-2 py-6 my-16 flex flex-col items-center justify-center">

            <div className="grid 
    grid-cols-1 
    sm:grid-cols-2 
    lg:grid-cols-3
    gap-8 
    mt-10">
                <div className="flex flex-col items-start justify-center bg-[#F9FAFB] p-6 rounded-lg" >
                    <img src={MissionImg1} alt="Proven Results" className="hover:brightness-50 transition duration-300" />
                    <p className="text-[#0A0A0A] text-center font-bold mt-4"> Our Mission </p>
                    <p className="text-[#4A5565] mt-2">  To improve the perception about community association living while building stronger and safer communities that preserve value.  </p>
                </div>
                <div className="flex flex-col items-start justify-center bg-[#F9FAFB] p-6 rounded-lg" >
                    <img src={MissionImg2} alt="Secure & Reliable" className="hover:brightness-50 transition duration-300" />
                    <p className="text-[#0A0A0A] text-center font-bold mt-4"> Our Purpose </p>
                    <p className="text-[#4A5565]  mt-2"> To consistently execute, concise services in the communities we serve that guarantees our clients Worry Free assurances that their assets are efficiently maintained. </p>
                </div>
                <div className="flex flex-col items-start justify-center bg-[#F9FAFB] p-6 rounded-lg" >
                    <img src={MissionImg3} alt="Expert Team" className="hover:brightness-50 transition duration-300" />
                    <p className="text-[#0A0A0A] text-center font-bold mt-4">Our Values</p>
                    <p className="text-[#4A5565]  mt-2">Integrity, transparency, and client-first approach guide every decision we make and action we take.</p>
                </div>

            </div>
        </section>
    )
}

export default Mission