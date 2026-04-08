const processData = [
    {
        id: 1,
        title: "Assessment & Diagnosis",
        description: "We conduct a thorough financial and operational assessment to identify root causes, risks, and immediate areas requiring attention."
    },
    {
        id: 2,
        title: "Strategy Development",
        description: "A tailored recovery roadmap is created with clear priorities, actionable steps, and defined timelines aligned with your business goals."
    },
    {
        id: 3,
        title: "Execution & Implementation",
        description: "Our team works alongside you to implement restructuring, cost optimization, and performance improvement initiatives effectively."
    },
    {
        id: 4,
        title: "Stabilization & Growth",
        description: "We continuously monitor progress, refine strategies, and ensure long-term financial stability while positioning your business for future growth."
    }
];

const RecoveryProcess = () => {
    return (
        <section className=" py-16 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-14">
                    Our Recovery Process
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                    {
                        processData.map(data => (
                            <div key={data.id} className="flex items-center justify-start flex-col gap-4">
                                <div
                                    className="
                  w-14 h-14
                  flex items-center justify-center
                  rounded-full
                  bg-[#BFD3D8]
                  text-[#0C7489]
                  font-bold text-lg
                  mb-2
                "
                                >
                                    {data.id}
                                </div>
                                <p className="text-[#0A0A0A] text-md font-bold">{data.title}</p>
                                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">{data.description}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default RecoveryProcess;