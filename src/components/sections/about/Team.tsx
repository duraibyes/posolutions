import TeamCard from "../../cards/TeamCard"

const Team = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 my-12">
            <div className='mb-4'>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-[#0C0047]">
                    Our Leadership Team
                </h2>
            </div>
            <div
                className="
                        grid grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-4
                        gap-10
                      "
            >
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
            </div>
        </section >
    )
}

export default Team