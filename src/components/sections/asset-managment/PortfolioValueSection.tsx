import { TrendingUp, BarChart3, Target } from "lucide-react";

const PortfolioValueSection = () => {
    const features = [
        {
            icon: <TrendingUp size={28} />,
            title: "Value Optimization",
            desc: "Strategic initiatives to enhance property values and maximize returns on investment.",
        },
        {
            icon: <BarChart3 size={28} />,
            title: "Performance Tracking",
            desc: "Real-time monitoring and reporting on key performance metrics across your portfolio.",
        },
        {
            icon: <Target size={28} />,
            title: "Risk Mitigation",
            desc: "Proactive identification and management of risks to protect your investment.",
        },
    ];

    return (
        <section className=" py-16 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto text-center">

                {/* HEADING */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Maximize Your Property Portfolio Value
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed">
                    Our asset management services provide strategic oversight and operational excellence
                    to enhance property performance, increase returns, and minimize risks across your entire portfolio.
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
};

export default PortfolioValueSection;