import { Check } from 'lucide-react'

import ImageWithFallback from '../../../../public/images/commercial/ImageWithFallback.png'
import ImageWithSkeleton from '../../common/ImageWithSkeleton'

const CommercialBenefitSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12 my-12">
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 items-center">
                <div className="w-full">
                    <ImageWithSkeleton
                        src={ImageWithFallback}
                        alt="Family"
                        className="w-full h-[300px] sm:h-[400px] lg:h-full object-cover rounded-2xl" />
                </div>
                <div>

                    {/* SMALL TITLE */}
                    <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-3">
                        Benefits of working with us
                    </p>

                    {/* MAIN TITLE */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
                        Reliable Management Solutions for Commercial and Public Facilities
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-6">
                        We deliver dependable facility and property management services designed to help businesses and government organizations maintain efficient, safe, and well-managed environments.
                    </p>

                    {/* LIST */}
                    <div className="space-y-4 mb-8">
                        {[
                            "Experienced professionals delivering dependable support.",
                            "Streamlined management processes that improve facility performance.",
                            "Consistent service quality across all property and facility services.",
                            "Organizations can focus on their work while we manage the property."
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-teal-100 text-teal-600">
                                    <Check size={16} />
                                </div>
                                <p className="text-[#0F172A] text-sm sm:text-base">{item}</p>
                            </div>
                        ))}
                    </div>

                    {/* BUTTONS */}
                    <div className="flex flex-col sm:flex-row gap-4">

                        <button className="w-full sm:w-auto
                                            px-6 py-3
                                            rounded-full
                                            text-white
                                            bg-[#0E6E8B]
                                            border border-transparent
                                            
                                            hover:bg-white hover:text-[#0E6E8B] hover:border-[#0E6E8B]
                                            transition duration-300"
                            style={{ boxShadow: "0 4px 6px -1px rgba(14, 110, 139, 0.20), 0 2px 4px -2px rgba(14, 110, 139, 0.20)" }}
                        >
                            Request a Consultation
                        </button>

                        <button className="w-full sm:w-auto px-6 py-3 border border-[#E2E8F0] text-[#0F172A] rounded-full hover:bg-gray-100 transition">
                            Contact Our Team Today
                        </button>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default CommercialBenefitSection