import { CheckCircle } from "lucide-react";

type Feature = {
    title: string;
    description: string;
    points: string[];
};

const features: Feature[] = [
    {
        title: "Board Support & Governance",
        description:
            "Empowering board members with the tools, guidance, and structure needed to lead effectively while ensuring compliance and transparent decision-making.",
        points: [
            "Board meeting planning, coordination, and documentation",
            "Policy creation, enforcement, and governance best practices",
            "Compliance with bylaws, regulations, and legal requirements",
            "Ongoing training and advisory support for board members"
        ],
    },
    {
        title: "Financial Management",
        description:
            "Comprehensive financial oversight designed to maintain transparency, strengthen reserves, and ensure long-term financial stability.",
        points: [
            "Annual budgeting and ongoing financial monitoring",
            "Assessment billing, collection, and accounting management",
            "Detailed monthly financial reporting and insights",
            "Reserve study planning and capital expense forecasting"
        ],
    },
    {
        title: "Community Communication",
        description:
            "Streamlined communication systems that keep residents informed, engaged, and aligned with community standards and updates.",
        points: [
            "Digital resident portals for easy access and updates",
            "Regular newsletters, announcements, and alerts",
            "Responsive support for homeowner inquiries and concerns",
            "Fair and consistent violation tracking and communication"
        ],
    },
    {
        title: "Vendor & Maintenance Management",
        description:
            "Efficient coordination of vendors and maintenance services to ensure quality work, cost control, and timely execution.",
        points: [
            "Vendor sourcing, vetting, and contract management",
            "Work order tracking and maintenance scheduling",
            "Quality assurance and service performance monitoring",
            "Preventive maintenance planning for long-term asset care"
        ],
    },
];

const AssociationServices = () => {
    return (
        <section className=" py-16 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto">

                {/* TITLE */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Our Association Management Services
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

export default AssociationServices;