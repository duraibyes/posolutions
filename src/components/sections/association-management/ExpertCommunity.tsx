import { FileText, Users, Wallet } from "lucide-react";

const features = [
    {
        icon: <Users size={28} />,
        title: "Community Focus",
        desc: "We foster strong, well-connected communities through clear communication, responsive support, and proactive management that enhances resident satisfaction.",
    },
    {
        icon: <FileText size={28} />,
        title: "Comprehensive Services",
        desc: "From financial oversight and maintenance coordination to governance and compliance, we provide end-to-end solutions that simplify association management.",
    },
    {
        icon: <Wallet size={28} />,
        title: "Financial Expertise",
        desc: "Our financial expertise ensures accurate budgeting, transparent reporting, and long-term planning to protect reserves and sustain property values.",
    },
];

const ExpertCommunity = () => {
    return (
        <section className=" py-16 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto text-center">

                {/* HEADING */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Expert Community Management
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed">
                    We partner with homeowners associations, condominium boards, and residential communities to deliver
                    reliable, transparent, and efficient management solutions that improve operations, strengthen communities,
                    and preserve long-term property value.
                </p>

                {/* CARDS */}
                <div className="
          mt-12
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="
                bg-[#0E6E8B33]
                rounded-2xl
                p-6 sm:p-8
                text-left
                transition duration-300
                hover:shadow-lg 
              "
                        >
                            {/* ICON */}
                            <div className="text-[#0C7489] mb-4">
                                {item.icon}
                            </div>

                            {/* TITLE */}
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                                {item.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}

export default ExpertCommunity;