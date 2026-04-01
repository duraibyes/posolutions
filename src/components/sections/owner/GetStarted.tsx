import SecondaryButton from "../../button/SecondaryButton"

const GetStarted = () => {
    return (
        <section className="max-w-5xl mx-auto px-4 py-12 my-12">
            <div className="flex flex-col gap-10 items-center justify-center bg-primary rounded-xl p-12" >
                <h2 className="text-2xl sm:text-3xl md:text-4xl  font-bold text-center text-white">
                    Ready to Get Started?
                </h2>
                <p className="text-white text-center">
                    Join thousands of satisfied clients who trust POSolutions with their asset management needs.
                </p>
                <div className="w-full text-center">
                    <SecondaryButton label="Schedule a Consultation" onClick={() => { }} />
                </div>
            </div>

        </section>
    )
}

export default GetStarted