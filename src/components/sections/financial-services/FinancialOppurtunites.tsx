import { RefreshCcw, Target, TrendingUp } from "lucide-react";

const features = [
    {
        icon: <TrendingUp size={28} />,
        title: "Recovery Planning",
        desc: "We conduct a deep financial assessment to uncover root causes, identify recovery opportunities, and build a clear, actionable roadmap toward stability and growth.",
    },
    {
        icon: <RefreshCcw size={28} />,
        title: "Restructuring Expertise",
        desc: "Our specialists guide you through complex restructuring processes, including debt reorganization, cost optimization, and operational realignment to restore financial balance.",
    },
    {
        icon: <Target size={28} />,
        title: "Results-Driven",
        desc: "We focus on delivering measurable outcomes—improving cash flow, strengthening profitability, and building a more resilient financial foundation.",
    },
];

const FinancialOppurtunites = () => {
    return (
        <section className=" py-16 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto text-center">

                {/* HEADING */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Transform Financial Challenges into Strategic Opportunities
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed">
                    We partner with organizations facing financial pressure to stabilize operations,
                    restore confidence, and implement structured turnaround strategies that lead to
                    sustainable recovery and long-term success.
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

export default FinancialOppurtunites;