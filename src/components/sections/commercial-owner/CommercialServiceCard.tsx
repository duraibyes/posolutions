import { commercialServices } from "../../../utils/services"
import ImageWithSkeleton from "../../common/ImageWithSkeleton"

const CommercialServiceCard = () => {
    return (

        commercialServices.map((service) => (
            <div
                key={service.title}
                className="
                        bg-white rounded-2xl p-4
                        
                        transition duration-300
                        border border-gray-100
                      "         style={{ boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)" }}
            >

                {/* IMAGE */}
                <div className="rounded-xl overflow-hidden mb-4">

                    <ImageWithSkeleton
                        src={service.image}
                        alt={service.title}
                        className="mb-4 h-50"
                    />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                    {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-[#64748B] leading-relaxed">
                    {service.description}
                </p>

            </div>
        ))

    )
}

export default CommercialServiceCard