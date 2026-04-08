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
            "We develop and execute strategic debt restructuring plans to reduce financial pressure, improve liquidity, and restore your organization’s financial stability.",
        points: [
            "Creditor negotiation and settlement strategies",
            "Debt refinancing and consolidation planning",
            "Customized repayment structures",
            "Bankruptcy avoidance and alternative solutions"
        ],
    },
    {
        title: "Cash Flow Optimization",
        description:
            "We implement immediate and practical solutions to stabilize cash flow, ensuring your business can continue operating without disruption.",
        points: [
            "Working capital and liquidity management",
            "Accounts receivable acceleration strategies",
            "Cost reduction and expense control",
            "Short- and long-term cash flow forecasting"
        ],
    },
    {
        title: "Turnaround Strategies",
        description:
            "Our turnaround approach focuses on restoring profitability through operational improvements, revenue growth, and strategic realignment.",
        points: [
            "Operational efficiency and process improvements",
            "Revenue growth and pricing optimization",
            "Cost structure redesign",
            "Business model evaluation and repositioning"
        ],
    },
    {
        title: "Financial Analysis & Planning",
        description:
            "We conduct in-depth financial diagnostics to uncover root causes and build a clear, actionable roadmap for recovery and long-term success.",
        points: [
            "Comprehensive financial health assessment",
            "Customized recovery and restructuring plans",
            "Performance tracking and reporting systems",
            "Stakeholder and investor communication support"
        ],
    },
];

const FinancialRecoveryProcess = () => {
    return (
        <section className=" py-16 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto">

                {/* TITLE */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Comprehensive Financial Recovery Solutions
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