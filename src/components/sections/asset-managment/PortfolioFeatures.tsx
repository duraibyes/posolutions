import { CheckCircle } from "lucide-react";

type Feature = {
    title: string;
    description: string;
    points: string[];
};

const features: Feature[] = [
    {
        title: "Portfolio Optimization",
        description:
            "Strategic analysis and planning to optimize your property portfolio composition and performance.",
        points: [
            "Portfolio performance analysis",
            "Asset allocation strategies",
            "Acquisition and disposition planning",
            "Market opportunity identification",
        ],
    },
    {
        title: "Performance Tracking",
        description:
            "Comprehensive monitoring and reporting systems to track asset performance and identify opportunities.",
        points: [
            "KPI development and tracking",
            "Financial performance reporting",
            "Benchmarking against market standards",
            "Trend analysis and forecasting",
        ],
    },
    {
        title: "Strategic Planning",
        description:
            "Long-term strategic planning to align asset management with your overall investment objectives.",
        points: [
            "Business plan development",
            "Capital improvement planning",
            "Investment strategy formulation",
            "Exit strategy planning",
        ],
    },
    {
        title: "Operational Excellence",
        description:
            "Ensuring efficient operations and optimal performance across all managed properties.",
        points: [
            "Operating expense management",
            "Tenant retention programs",
            "Revenue enhancement initiatives",
            "Quality control and compliance",
        ],
    },
];

const PortfolioFeatures = () => {
    return (
        <section className=" py-16 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto">

                {/* TITLE */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Maximize Your Property Portfolio Value
                </h2>

                {/* GRID */}
                <div className="
          grid grid-cols-1
          sm:grid-cols-2
          gap-6 lg:gap-8
        ">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="
                bg-white
                rounded-2xl
                shadow-md
                p-6 sm:p-8
                transition duration-300
                hover:shadow-lg
              "
                        >
                            {/* TITLE */}
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                                {item.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                                {item.description}
                            </p>

                            {/* LIST */}
                            <ul className="space-y-3">
                                {item.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                                        <CheckCircle className="text-[#0C7489] mt-1" size={18} />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
};

export default PortfolioFeatures;