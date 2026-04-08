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
            "We evaluate your entire portfolio to identify opportunities for growth, improved efficiency, and stronger returns through strategic asset positioning.",
        points: [
            "In-depth portfolio performance analysis",
            "Smart asset allocation and diversification strategies",
            "Acquisition and disposition planning",
            "Identification of high-growth market opportunities",
        ],
    },
    {
        title: "Performance Tracking & Reporting",
        description:
            "Stay informed with transparent reporting and real-time insights that help you understand performance and act quickly on opportunities.",
        points: [
            "Custom KPI development and tracking",
            "Detailed financial and operational reporting",
            "Benchmarking against market and industry standards",
            "Predictive trend analysis and forecasting",
        ],
    },
    {
        title: "Strategic Investment Planning",
        description:
            "We align your assets with long-term financial goals through tailored strategies designed to maximize value and ensure sustainable growth.",
        points: [
            "Comprehensive business plan development",
            "Capital improvement and reinvestment planning",
            "Investment strategy design and execution",
            "Clear and profitable exit strategy planning",
        ],
    },
    {
        title: "Operational Excellence",
        description:
            "Our hands-on management approach ensures your properties operate efficiently, reduce costs, and consistently deliver high performance.",
        points: [
            "Operating expense control and optimization",
            "Tenant satisfaction and retention programs",
            "Revenue growth and rent optimization strategies",
            "Regulatory compliance and quality assurance",
        ],
    },
];

const PortfolioFeatures = () => {
    return (
        <section className=" py-16 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto">

                {/* TITLE */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Comprehensive Asset Management Solutions
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