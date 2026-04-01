import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { testimonials } from "../../utils/config";

const Testimonial = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C0047]">
                    POSolutions is loved by users
                </h2>

                {/* CUSTOM ARROWS */}
                <div className="flex gap-3">
                    <button className="swiper-prev w-10 h-10 rounded-full border flex items-center justify-center">
                        ←
                    </button>

                    <button className="swiper-next w-10 h-10 rounded-full border border-primary text-primary flex items-center justify-center">
                        →
                    </button>
                </div>
            </div>

            {/* SWIPER */}
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={16}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: ".swiper-next",
                    prevEl: ".swiper-prev",
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {testimonials.map((item, i) => (
                    <SwiperSlide key={i} className="h-auto flex">
                        <div className=" border rounded-2xl p-6 bg-white
    shadow-sm hover:shadow-lg transition duration-300
    flex flex-col w-full h-full min-h-[280px]">

                            {/* USER */}
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={item.image}
                                    className="w-12 h-12 rounded-full"
                                    alt={item.name}
                                />
                                <div>
                                    <h4 className="font-semibold text-[#343434]">
                                        {item.name}
                                    </h4>
                                    <p className="text-sm text-[#969696]">
                                        {item.role}
                                    </p>
                                </div>
                            </div>

                            <p className="text-[#969696] text-sm leading-relaxed mb-6 flex-grow">
                                {item.text}
                            </p>

                            {/* STARS (stick to bottom) */}
                            <div className="flex gap-1 text-orange-500 mt-auto">
                                {"★★★★★"}
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
};

export default Testimonial;