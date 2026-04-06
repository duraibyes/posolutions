import { RefreshCcw, Target, TrendingUp } from "lucide-react";

const features = [
    {
        icon: <TrendingUp size={28} />,
        title: "Recovery Planning",
        desc: "Comprehensive assessment and strategic planning to identify recovery opportunities and paths forward.",
    },
    {
        icon: <RefreshCcw size={28} />,
        title: "Restructuring Expertise",
        desc: "Expert guidance on debt restructuring, operational improvements, and financial reorganization.",
    },
    {
        icon: <Target size={28} />,
        title: "Results-Driven",
        desc: "Focused on delivering measurable improvements in cash flow, profitability, and financial stability.",
    },
];

const FinancialOppurtunites = () => {
    return (
        <section className=" py-16 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto text-center">

                {/* HEADING */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Turn Financial Challenges Into Opportunities
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed">
                    Our financial recovery specialists work with organizations facing financial distress to develop and implement comprehensive turnaround strategies that restore financial health and stability.
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