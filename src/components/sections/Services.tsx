import { useNavigate } from "react-router-dom"
import ServiceCard from "../cards/ServiceCard"

const Services = () => {
    const navigate = useNavigate();
    return (
        <section className="max-w-7xl mx-auto px-4 py-12 my-12">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-4">
                <div>
                    <p className="text-sm text-[#0E6E8B] font-semibold tracking-wide uppercase">
                        Community Services
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] mt-2">
                        Everything Your Community Needs, All in One Place
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-4xl">
                        From daily maintenance to long-term property care, our services are designed to simplify
                        community living, improve efficiency, and enhance the overall homeowner experience.
                    </p>
                </div>

                <button
                    onClick={() => navigate('/services')}
                    className="text-[#0E6E8B] font-medium flex items-center gap-2 hover:gap-3 transition-all">
                    View All Services →
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServiceCard />
            </div>

        </section>
    )
}

export default Services