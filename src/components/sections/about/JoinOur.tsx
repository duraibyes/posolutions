import SecondaryButton from '../../button/SecondaryButton'

const JoinOur = () => {
    return (
        <section className="max-w-5xl mx-auto px-4 py-12 my-12">
            <div className="flex flex-col gap-10 items-center justify-center bg-primary rounded-xl p-12" >
                <h2 className="text-2xl sm:text-3xl md:text-4xl  font-bold text-center text-white">
                    Join Our Growing Family
                </h2>
                <p className="text-white text-center">
                    Experience the POSolutions difference and discover why thousands of clients trust us with their most important assets.
                </p>
                <div className="w-full text-center">
                    <SecondaryButton label="Schedule a Consultation" onClick={() => { }} />
                </div>
            </div>

        </section>
    )
}

export default JoinOur