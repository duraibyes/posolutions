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
            "Professional support for your board of directors to ensure effective governance and decision-making.",
        points: [
            "Board meeting coordination and facilitation",
            "Policy development and enforcement",
            "Compliance with governing documents",
            "Training and education for board members"
        ],
    },
    {
        title: "Financial Management",
        description:
            "Complete financial oversight including budgeting, accounting, and financial reporting.",
        points: [
            "Budget preparation and monitoring",
            "Assessment collection and accounting",
            "Monthly financial statements",
            "Reserve fund planning and management"
        ],
    },
    {
        title: "Community Communication",
        description:
            "Effective communication strategies to keep residents informed and engaged.",
        points: [
            "Resident portal and online access",
            "Newsletter and community updates",
            "Responsive resident support",
            "Violation notice management"
        ],
    },
    {
        title: "Vendor Coordination",
        description:
            "Professional management of vendors and contractors to ensure quality service delivery.",
        points: [
            "Vendor selection and contracting",
            "Work order management",
            "Quality control and oversight",
            "Maintenance program coordination"
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