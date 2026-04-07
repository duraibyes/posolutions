import { Key, TrendingUp, Users } from "lucide-react";

const features = [
    {
        icon: <Key size={28} />,
        title: "Property Transactions",
        desc: "Seamless buying, selling, and leasing services with expert negotiation and market insights.",
    },
    {
        icon: <TrendingUp size={28} />,
        title: "Market Expertise",
        desc: "Deep knowledge of local markets and trends to help you make informed investment decisions.",
    },
    {
        icon: <Users size={28} />,
        title: "Client-Focused Service",
        desc: "Personalized attention and dedicated support throughout your real estate journey.",
    },
];

const TrustedPartner = () => {
    return (
        <section className=" py-16 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto text-center">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Your Trusted Real Estate Partner
                </h2>

                <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed">
                    Our experienced real estate professionals provide comprehensive brokerage services for residential and commercial properties, guiding you through every step of the transaction process.
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