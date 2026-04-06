import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ImageWithSkeleton from "../../common/ImageWithSkeleton"
import OurServicesImg from "../../../../public/images/services/asset_service.png";

const AssetService = () => {
    const navigate = useNavigate();
    return (
        <section className="max-w-7xl mx-auto px-4 py-12 my-12">

            <div className="grid grid-cols-1 sm:grid-cols-2 mt-2 gap-8 items-center">

                <div className="w-full">

                    <ImageWithSkeleton
                        src={OurServicesImg}
                        alt="Our Services"
                        className="w-full h-[300px] sm:h-[400px] lg:h-full object-cover rounded-2xl"
                    />
                </div>
                <div>

                    {/* SMALL TITLE */}
                    <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-3">
                        Our services
                    </p>

                    {/* MAIN TITLE */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
                        Asset Management
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                        Whether your portfolio consists of commercial buildings, vacant or occupied properties, you are probably familiar with the unexpected – and, often, unprovoked – maintenance issues that can occur. As an experienced asset preservation company, we are trained and prepared to quickly remedy any outstanding or newly developed building and facility maintenance requests.
                    </p>

                    {/* LIST */}
                    <div className="space-y-4 mb-8">
                        {[
                            "Quick Response Emergency Maintenance",
                            "Janitorial Services",
                            "General Maintenance",
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-teal-100 text-teal-600">
                                    <Check size={16} />
                                </div>
                                <p className="text-gray-700 text-sm sm:text-base">{item}</p>
                            </div>
                        ))}
                    </div>

                    {/* BUTTONS */}
                    <div className="flex flex-col sm:flex-row gap-4">

                        <button
                            onClick={() => navigate('/asset-management')}
                            className="w-full sm:w-auto
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

            </div>
        </section>
    )
}

export default AssetService