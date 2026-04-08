import { Key, TrendingUp, Users } from "lucide-react";

const features = [
    {
        icon: <Key size={28} />,
        title: "End-to-End Property Transactions",
        desc: "From listing to closing, we manage buying, selling, and leasing with precision, ensuring smooth transactions and optimal outcomes.",
    },
    {
        icon: <TrendingUp size={28} />,
        title: "Data-Driven Market Insights",
        desc: "Leverage in-depth market analysis, pricing strategies, and trend forecasting to make confident and profitable real estate decisions.",
    },
    {
        icon: <Users size={28} />,
        title: "Client-Focused Service",
        desc: "We prioritize your goals with personalized strategies, transparent communication, and dedicated support at every stage.",
    },
];

const TrustedPartner = () => {
    return (
        <section className=" py-16 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto text-center">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    A Trusted Partner for Every Real Estate Decision
                </h2>

                <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed">
                    Whether you're buying, selling, or leasing residential or commercial properties, our experienced
                    brokerage team delivers strategic guidance, market expertise, and hands-on support to help you
                    achieve the best possible results with confidence
                </p>

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
                            <div className="text-[#0C7489] mb-4">
                                {item.icon}
                            </div>

                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                                {item.title}
                            </h3>

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

export default TrustedPartner;