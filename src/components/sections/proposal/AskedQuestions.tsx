import { faqs } from "../../../utils/config"

const AskedQuestions = () => {
    return (
        <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                Frequently Asked Questions
            </h2>

            <div className="space-y-6">
                {faqs.map((item, index) => (
                    <div
                        key={index}
                        className="pl-4 border-l-4 border-[#0C7489]"
                    >
                        <h3 className="font-semibold text-gray-900 mb-1">
                            {item.q}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {item.a}
                        </p>
                    </div>
                ))}
            </div>
            <div className="bg-[#0C748933] p-6 rounded-2xl hover:shadow-md transition duration-300 my-12">
                <div className="flex items-center gap-3 mb-4">
                    <h3 className="font-semibold text-[#0A0A0A]">
                        Need Immediate Assistance?
                    </h3>
                </div>
                <div className="flex justify-between text-[#4A5565] text-sm mb-4">
                    For urgent matters, please call our 24/7 emergency line:
                </div>
                <div className="flex justify-between text-[#0C7489] text-lg font-semibold">
                    +1 678-715-1430
                </div>
            </div>
        </div>
    )
}

export default AskedQuestions