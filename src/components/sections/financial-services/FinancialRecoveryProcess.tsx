import { CheckCircle } from "lucide-react";

type Feature = {
    title: string;
    description: string;
    points: string[];
};

const features: Feature[] = [
    {
        title: "Debt Restructuring",
        description:
            "Strategic analysis and planning to optimize your property portfolio composition and performance.Strategic debt restructuring to reduce financial burden and improve cash flow position.",
        points: [
            "Creditor negotiation and settlement",
            "Debt refinancing and consolidation",
            "Payment plan development",
            "Bankruptcy alternative solutions"
        ],
    },
    {
        title: "Cash Flow Optimization",
        description:
            "Immediate actions to improve cash flow and ensure operational continuity.",
        points: [
            "Working capital management",
            "Accounts receivable acceleration",
            "Expense reduction strategies",
            "Cash forecasting and monitoring"
        ],
    },
    {
        title: "Turnaround Strategies",
        description:
            "Comprehensive turnaround planning and execution to restore organizational health.",
        points: [
            "Operational efficiency improvements",
            "Revenue enhancement initiatives",
            "Cost structure optimization",
            "Business model reassessment"
        ],
    },
    {
        title: "Financial Analysis & Planning",
        description:
            "Detailed financial analysis to identify root causes and develop recovery roadmaps.",
        points: [
            "Financial diagnostic assessment",
            "Recovery plan development",
            "Performance monitoring systems",
            "Stakeholder communication"
        ],
    },
];

const FinancialRecoveryProcess = () => {
    return (
        <section className=" py-16 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto">

                {/* TITLE */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Our Financial Recovery Services
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

export default FinancialRecoveryProcess;