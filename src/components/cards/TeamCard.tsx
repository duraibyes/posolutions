import TeamImg from "../../../public/images/about/team.png"

const TeamCard = () => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden
                        shadow-md hover:shadow-xl
                        transition duration-300
                        flex flex-col">

            <div className="overflow-hidden">
                <img
                    src={TeamImg}
                    alt="Team"
                    className="
            w-full
            h-52 sm:h-60 md:h-64
            object-cover
            transition duration-300 hover:scale-105
          "
                />
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col gap-3 flex-grow">

                <h3 className="text-lg sm:text-xl font-semibold text-[#0A0A0A]">
                    Shandron Forte
                </h3>

                <p className="text-[#155DFC] text-sm sm:text-base">
                    President & CEO
                </p>

                <p className="text-[#4A5565] text-sm leading-relaxed">
                    25+ years in asset management with expertise in strategic growth.
                </p>

            </div>
        </div>
    )
}

export default TeamCard