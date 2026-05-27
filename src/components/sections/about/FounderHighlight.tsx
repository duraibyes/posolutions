import TeamImg from "../../../../public/images/about/team.png";

const FounderHighlight = () => {
    return (
        <section className="relative overflow-hidden  py-8 md:py-12">

            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* IMAGE */}
                    <div className="flex justify-center lg:justify-start">

                        <div className="relative group">

                            {/* Glow Border */}
                            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/40 to-white opacity-60 blur"></div>

                            <div className="relative overflow-hidden rounded-3xl bg-white p-2 shadow-2xl">

                                <img
                                    src={TeamImg}
                                    alt="Shandron Forte"
                                    className="
                                        w-full
                                        max-w-auto
                                        h-auto
                                        object-cover
                                        rounded-2xl
                                        transition duration-500
                                        group-hover:scale-105
                                    "
                                />

                            </div>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="text-center lg:text-left text-[#475569]">

                        <p className="uppercase tracking-[4px] text-primary text-sm mb-4 font-medium">
                            Founder & Visionary Leader
                        </p>

                        <h2 className="text-4xl sm:text-5xl  text-[#0C0047] font-bold leading-tight mb-6 pl-0 ml-0">
                            Shandron Forte
                        </h2>
                        <p className="text-primary/60 text-sm sm:text-base">
                            President & CEO
                        </p>

                        <div className="w-24 h-1 bg-primary rounded-full mx-auto lg:mx-0 mb-8"></div>

                        <p className=" text-base sm:text-lg leading-relaxed mb-6">
                            With more than 25 years of experience in asset and property management,
                            Shandron Forte has built POSolutions into a trusted name known for innovation,
                            strategic leadership, and long-term client success.
                        </p>

                        <p className=" text-sm sm:text-base leading-relaxed mb-10">
                            Under his leadership, POSolutions has expanded its impact across the Atlanta Metro Area,
                            managing thousands of residential and commercial assets while maintaining exceptional
                            client retention and service quality.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default FounderHighlight;