import { CheckCircle } from "lucide-react";

type Feature = {
    title: string;
    description: string;
    points: string[];
};

const features: Feature[] = [
    {
        title: "Sales & Acquisitions",
        description:
            "Expert representation for buyers and sellers in residential and commercial real estate transactions.",
        points: [
            "Property valuation and pricing strategy",
            "Marketing and property showcasing",
            "Negotiation and contract management"
        ],
    },
    {
        title: "Leasing Services",
        description:
            "Comprehensive leasing solutions for landlords and tenants seeking optimal lease agreements.",
        points: [
            "Tenant screening and placement",
            "Lease negotiation and documentation",
            "Market rent analysis and optimization"
        ],
    },
    {
        title: "Investment Advisory",
        description:
            "Strategic guidance for real estate investors seeking to build and optimize their property portfolios.",
        points: [
            "Investment property identification",
            "Cash flow and ROI analysis",
            "Portfolio diversification strategies"
        ],
    },
    {
        title: "Market Analysis",
        description:
            "In-depth market research and analysis to inform your real estate decisions and strategies.",
        points: [
            "Comparative market analysis",
            "Neighborhood and demographic trends",
            "Property appreciation forecasts"
        ],
    },
];

const OurBrokerage = () => {
    return (
        <section className=" py-16 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto">

                {/* TITLE */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Our Brokerage Services
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
                shadow-lg
                p-6 sm:p-8
                transition duration-300
                hover:shadow-xl
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

export default OurBrokerage;