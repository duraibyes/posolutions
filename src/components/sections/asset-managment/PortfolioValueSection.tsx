import { TrendingUp, BarChart3, Target } from "lucide-react";

const PortfolioValueSection = () => {
    const features = [
        {
            icon: <TrendingUp size={28} />,
            title: "Value Optimization",
            desc: "We implement data-driven strategies and operational improvements to increase asset value, boost returns, and unlock the full potential of your portfolio.",
        },
        {
            icon: <BarChart3 size={28} />,
            title: "Performance Tracking",
            desc: "Gain complete visibility with real-time insights, detailed reporting, and key performance metrics that help you make informed, confident decisions.",
        },
        {
            icon: <Target size={28} />,
            title: "Risk Mitigation",
            desc: "We proactively identify potential risks and implement preventive measures to safeguard your assets and ensure long-term stability and growth.",
        },
    ];

    return (
        <section className=" py-16 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto text-center">

                {/* HEADING */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Maximize the Value of Your Property Portfolio
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed">
                    Our asset management approach combines strategic planning, financial insight, and operational excellence
                    to help you increase returns, improve efficiency, and maintain long-term asset performance across your portfolio.
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