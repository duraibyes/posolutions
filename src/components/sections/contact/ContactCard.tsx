import ContactImg1 from "../../../../public/images/contact/contact-1.png";
import ContactImg2 from "../../../../public/images/contact/contact-2.png";
import ContactImg3 from "../../../../public/images/contact/contact-3.png";

const ContactCard = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-4 xl:px-2 py-6 my-16 flex flex-col items-center justify-center">
            <div className='mb-4'>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-[#0C0047]">
                    Contact Us
                </h2>
            </div>
            <div className="grid 
    grid-cols-1 
    sm:grid-cols-2 
    lg:grid-cols-3
    gap-8 
    mt-10">
                <div className="flex flex-col items-start justify-center bg-[#F9FAFB] p-6 rounded-lg gap-2 hover:shadow-md" >
                    <img src={ContactImg1} alt="Proven Results" className="hover:brightness-50 transition duration-300" />
                    <p className="text-[#0A0A0A] text-center font-bold mt-4"> Phone </p>
                    <p className="text-[#4A5565] mt-2">  Call us during business hours </p>
                    <p className="text-[#0C7489] font-bold">+1 678-715-1430</p>
                </div>
                <div className="flex flex-col items-start justify-center bg-[#F9FAFB] p-6 rounded-lg gap-2 hover:shadow-md" >
                    <img src={ContactImg2} alt="Secure & Reliable" className="hover:brightness-50 transition duration-300" />
                    <p className="text-[#0A0A0A] text-center font-bold mt-4">Email </p>
                    <p className="text-[#4A5565]  mt-2"> Send us an email anytime </p>
                    <p className="text-[#0C7489] font-bold">shan@posolutions.net</p>
                </div>
                <div className="flex flex-col items-start justify-center bg-[#F9FAFB] p-6 rounded-lg gap-2 hover:shadow-md " >
                    <img src={ContactImg3} alt="Expert Team" className="hover:brightness-50 transition duration-300" />
                    <p className="text-[#0A0A0A] text-center font-bold mt-4"> Office </p>
                    <p className="text-[#4A5565]  mt-2"> Visit our headquarters </p>
                    <p className="text-[#0C7489] font-bold">6713 Church Street, Douglasville, GA 30134</p>
                </div>

            </div>
        </section>
    )
}

export default ContactCard