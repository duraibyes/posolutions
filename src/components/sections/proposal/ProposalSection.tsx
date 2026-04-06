import "react-datepicker/dist/react-datepicker.css";
import AskedQuestions from './AskedQuestions';
import ProposalForm from './ProposalForm';

const ProposalSection = () => {

    return (
        <section className=" py-16 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* LEFT - FORM */}
                <ProposalForm />

                {/* RIGHT - FAQ */}
                <AskedQuestions />

            </div>

        </section>
    )
}

export default ProposalSection;
