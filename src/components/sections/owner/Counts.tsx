
const Counts = () => {
    return (
        <section
            className="
            flex flex-col
            max-w-7xl
            mx-auto px-4
            items-center justify-around
            md:px-4
            xl:px-2
            py-16
            my-16
          "
        >
            <div
                className="
                grid grid-cols-1
                mt-10
                gap-12
                sm:grid-cols-2
                lg:grid-cols-4
                w-full
              "
            >
                <div className="flex flex-col items-center justify-center" >
                    <p className="text-5xl font-bold" style={{
                        background: "linear-gradient(135deg, #0C7489 0%, #0092B8 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}>$2.5B+</p>
                    <p className="text-[#4A5565] text-center  mt-4">Asset Under Management</p>
                </div>
                <div className="flex flex-col items-center justify-center" >
                    <p className="text-5xl font-bold" style={{
                        background: "linear-gradient(135deg, #0C7489 0%, #0092B8 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }} >5,000+</p>
                    <p className="text-[#4A5565] text-center  mt-4"> Satisfied Clients </p>
                </div>
                <div className="flex flex-col items-center justify-center" >
                    <p className="text-5xl font-bold" style={{
                        background: "linear-gradient(135deg, #0C7489 0%, #0092B8 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }} >25+</p>
                    <p className="text-[#4A5565] text-center  mt-4"> Years of Experience </p>
                </div>
                <div className="flex flex-col items-center justify-center" >
                    <p className="text-5xl font-bold" style={{
                        background: "linear-gradient(135deg, #0C7489 0%, #0092B8 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }} >98%</p>
                    <p className="text-[#4A5565] text-center  mt-4"> Client Retention </p>
                </div>
            </div>
        </section>
    )
}

export default Counts