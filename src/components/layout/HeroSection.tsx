type HeroSectionProps = {
    content: React.ReactNode;

};

const HeroSection = ({
    content,
}: HeroSectionProps) => {
    return (
        <section className="relative overflow-hidden bg-white min-h-[90vh] sm:min-h-screen">

            {/* BACKGROUND */}
            <div className="absolute top-0 left-0 w-full
          h-[700px] sm:h-[650px] md:h-[750px] lg:h-[850px]
          bg-[#0C7489] z-0 min-h-[90vh] sm:min-h-screen" />

            {/* CURVE */}
            <div className="absolute bottom-0 left-0 w-full z-0">
                <svg
                    viewBox="0 0 1440 320"
                    className="w-full h-[120px] sm:h-[150px] md:h-[200px]"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#ffffff"
                        d="M0,260 C800,250 1100,120 1440,0 L1440,520 L0,500 Z"
                    />
                </svg>
            </div>

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col
          min-h-[90vh] sm:min-h-screen
          px-4 sm:px-6 lg:px-8
          pt-24 sm:pt-28 md:pt-32
          pb-24 sm:pb-28 md:pb-32   ">
                {content}
            </div>

        </section>
    );
};

export default HeroSection;