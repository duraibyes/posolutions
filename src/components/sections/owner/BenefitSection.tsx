import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ImageWithFallback from "../../../../public/images/owner/ImageWithFallback.png";
import ImageWithSkeleton from "../../common/ImageWithSkeleton";

const BenefitSection = () => {
    const navigate = useNavigate();
    return (
        <section className="max-w-7xl mx-auto px-4 py-12 my-12">
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 items-center">
                <div className="w-full">

                    <ImageWithSkeleton
                        src={ImageWithFallback}
                        alt="Family"
                        className="w-full h-[300px] sm:h-[400px] lg:h-full object-cover rounded-2xl"
                    />
                </div>
                <div>

                    {/* SMALL TITLE */}
                    <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-3">
                        Why Homeowners Choose Us
                    </p>

                    {/* MAIN TITLE */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
                        Stress-Free Living Starts <br />
                        with Better Property Management
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                        We take the complexity out of managing residential communities by delivering
                        reliable, efficient, and high-quality services. Our goal is simple — to give
                        homeowners peace of mind while protecting and enhancing the value of their property.
                    </p>

                    {/* LIST */}
                    <div className="space-y-4 mb-8">
                        {[
                            "Dedicated experts ensuring your community runs smoothly every day.",
                            "Organized systems that reduce stress and improve communication.",
                            "High-quality service standards you can rely on consistently.",
                            "Long-term property care that protects and increases value.",
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-teal-100 text-[#0E6E8B]">
                                    <Check size={16} />
                                </div>
                                <p className="text-gray-700 text-sm sm:text-base">{item}</p>
                            </div>
                        ))}
                    </div>

                    {/* BUTTONS */}
                    <div className="flex flex-col sm:flex-row gap-4">

                        <button
                            onClick={() => navigate('/contact')}
                            className="w-full sm:w-auto
                                            px-6 py-3
                                            rounded-full
                                            text-white
                                            bg-[#0E6E8B]
                                            border border-transparent
                                            
                                            hover:bg-white hover:text-[#0E6E8B] hover:border-[#0E6E8B]
                                            transition duration-300"
                            style={{ boxShadow: "0 4px 6px -1px rgba(14, 110, 139, 0.20), 0 2px 4px -2px rgba(14, 110, 139, 0.20)" }}
                        >
                            Get Your Free Consultation
                        </button>

                        <button
                            onClick={() => navigate('/contact')}
                            className="w-full sm:w-auto px-6 py-3 border border-[#E2E8F0] text-[#0F172A] rounded-full hover:bg-gray-100 transition">
                            Talk to Our Team
                        </button>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default BenefitSection