import { Calendar, MessageSquare, Wallet } from "lucide-react";


const processData = [
    {
        id: <Calendar />,
        title: "Proven Industry Experience",
        description: "Extensive experience managing diverse communities, delivering consistent results, and maintaining high levels of resident satisfaction."
    },
    {
        id: <MessageSquare />,
        title: "Responsive & Reliable Support",
        description: "Dedicated management teams ensure timely communication, quick issue resolution, and a seamless experience for board members and residents."
    },
    {
        id: <Wallet />,
        title: "Strong Financial Oversight",
        description: "Disciplined financial management practices that safeguard reserves, control costs, and protect long-term property value."
    },

];

const WhyChooseAssociation = () => {
    return (
        <section className=" py-16 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-14">
                    Why Choose Our Association Management
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    {
                        processData.map(data => (
                            <div key={data.title} className="flex items-center justify-center flex-col gap-4">
                                <div
                                    className="
                  w-14 h-14
                  flex items-center justify-center
                  rounded-full
                  bg-[#BFD3D8]
                  text-[#0C7489]
                  font-bold text-lg
                  mb-2
                "
                                >
                                    {data.id}
                                </div>
                                <p className="text-[#0A0A0A] text-md font-bold">{data.title}</p>
                                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">{data.description}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default WhyChooseAssociation;