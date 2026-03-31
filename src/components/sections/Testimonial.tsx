import { useState } from "react";
import { testimonials } from "../../utils/config";


const Testimonial = () => {
    const [index, setIndex] = useState(0);

    const next = () => {
        if (index < testimonials.length - 3) {
            setIndex(index + 1);
        }
    };

    const prev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0C0047]">
                    POSolutions is loved by users
                </h2>

                {/* ARROWS */}
                <div className="flex gap-3">
                    <button
                        onClick={prev}
                        className="w-10 h-10 rounded-full border flex items-center justify-center"
                    >
                        ←
                    </button>

                    <button
                        onClick={next}
                        className="w-10 h-10 rounded-full border border-primary text-primary flex items-center justify-center"
                    >
                        →
                    </button>
                </div>
            </div>

            {/* SLIDER */}
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 gap-4"
                    style={{
                        transform: `translateX(-${index * 33.33}%)`,
                    }}
                >
                    {testimonials.map((item, i) => (
                        <div
                            key={i}
                            className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0"
                        >
                            <div className="border rounded-2xl p-6 h-full bg-white shadow-sm">

                                {/* USER */}
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={item.image}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-[#343434]">{item.name}</h4>
                                        <p className="text-sm text-[#969696]">{item.role}</p>
                                    </div>
                                </div>

                                {/* TEXT */}
                                <p className="text-[#969696] text-sm leading-relaxed mb-6">
                                    {item.text}
                                </p>

                                {/* STARS */}
                                <div className="flex gap-1 text-orange-500">
                                    {"★★★★★"}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Testimonial