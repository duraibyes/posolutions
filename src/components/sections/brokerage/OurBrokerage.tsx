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
            "Professional representation for buyers and sellers, ensuring every transaction is strategically positioned, expertly negotiated, and successfully executed.",
        points: [
            "Accurate property valuation and strategic pricing",
            "Targeted marketing and high-impact property exposure",
            "Skilled negotiation and contract execution"
        ],
    },
    {
        title: "Leasing & Tenant Representation",
        description:
            "End-to-end leasing solutions designed to secure reliable tenants, optimize rental income, and create mutually beneficial lease agreements.",
        points: [
            "Comprehensive tenant screening and placement",
            "Lease structuring, negotiation, and documentation",
            "Market rent analysis and revenue optimization"
        ],
    },
    {
        title: "Real Estate Investment Advisory",
        description:
            "Strategic advisory services to help investors identify opportunities, minimize risk, and maximize long-term returns.",
        points: [
            "High-potential investment property sourcing",
            "Detailed cash flow and ROI analysis",
            "Portfolio growth and diversification planning"
        ],
    },
    {
        title: "Market Intelligence & Analysis",
        description:
            "Data-driven insights and research that empower you to make confident, informed real estate decisions in dynamic markets.",
        points: [
            "Comparative market analysis (CMA) and pricing insights",
            "Local market trends and demographic analysis",
            "Property value forecasting and growth projections"
        ],
    },
];

const OurBrokerage = () => {
    return (
        <section className=" py-16 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto">

                {/* TITLE */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Comprehensive Brokerage Services
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