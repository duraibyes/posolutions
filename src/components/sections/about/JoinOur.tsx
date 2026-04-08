import { useNavigate } from 'react-router-dom'
import SecondaryButton from '../../button/SecondaryButton'

const JoinOur = () => {
    const navigate = useNavigate();
    return (
        <section className="max-w-5xl mx-auto px-4 py-12 my-12">
            <div className="flex flex-col gap-10 items-center justify-center bg-primary rounded-xl p-12" >
                <h2 className="text-2xl sm:text-3xl md:text-4xl  font-bold text-center text-white">
                    Join Our Growing Family
                </h2>
                <p className="text-white text-center">
                    Become part of a community that values trust, performance, and long-term success.
                    At POSolutions, we don’t just manage assets—we build lasting partnerships that help you grow,
                    protect, and maximize what matters most.
                </p>
                <div className="w-full text-center">
                    <SecondaryButton label="Schedule Your Free Consultation" onClick={() => navigate('/contact')} />
                </div>
            </div>

        </section>
    )
}

export default JoinOur