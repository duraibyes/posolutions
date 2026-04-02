import { Check } from "lucide-react"
import ImageWithSkeleton from "../../common/ImageWithSkeleton"
import OurServicesImg from "../../../../public/images/services/brokerate_service.png";

const EstateService = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12 my-12">

            <div className="grid grid-cols-1 sm:grid-cols-2 mt-2 gap-8 items-center">

                <div>

                    <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-3">
                        Our services
                    </p>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
                        Real Estate Brokerage Services
                    </h2>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                        As an innovative Real Estate Brokerage firm, we are proud to connect our clients with experienced agents who can provide them with the assistance needed to expand their investment portfolios. These motives and initiatives nicely sum up the framework for what we offer at POSolutions, Inc.
                    </p>

                    <div className="space-y-4 mb-8">
                        {[
                            "Document Compliance & Governance",
                            "Community Meeting Facilitation",
                            "Accounts Payable & Receivables",
                            "Vendor Maintenance",
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-teal-100 text-teal-600">
                                    <Check size={16} />
                                </div>
                                <p className="text-gray-700 text-sm sm:text-base">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">

                        <button className="w-full sm:w-auto
                                            px-6 py-3
                                            rounded-md
                                            text-white
                                            bg-[#0E6E8B]
                                            border border-transparent
                                            
                                            hover:bg-white hover:text-[#0E6E8B] hover:border-[#0E6E8B]
                                            transition duration-300"
                            style={{ boxShadow: "0 4px 6px -1px rgba(14, 110, 139, 0.20), 0 2px 4px -2px rgba(14, 110, 139, 0.20)" }}
                        >
                            Learn More
                        </button>

                    </div>

                </div>
                <div className="w-full">

                    <ImageWithSkeleton
                        src={OurServicesImg}
                        alt="Our Services"
                        className="w-full h-[300px] sm:h-[400px] lg:h-full object-cover rounded-2xl"
                    />
                </div>

            </div>
        </section>
    )
}

export default EstateService