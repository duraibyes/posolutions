import { Clock } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
    return (
        <section className=" py-16 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* LEFT - FORM */}
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                        Send Us a Message
                    </h2>

                    <ContactForm />
                </div>

                {/* RIGHT - INFO */}
                <div className="space-y-6 mt-16 lg:mt-0">

                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        Office Hours
                    </h2>

                    {/* BUSINESS HOURS */}
                    <div className="bg-[#0C748933] p-6 rounded-2xl hover:shadow-md transition duration-300">
                        <div className="flex items-center gap-3 mb-4">
                            <Clock className="text-[#0C7489]" />
                            <h3 className="font-semibold text-[#0A0A0A]">
                                Business Hours
                            </h3>
                        </div>

                        <div className="flex justify-between text-[#4A5565] text-sm mb-2">
                            <span>Monday - Thursday:</span>
                            <span>9:00 AM - 6:00 PM</span>
                        </div>

                        <div className="flex justify-between text-[#4A5565] text-sm">
                            <span>Friday:</span>
                            <span>9:00 AM - 6:00 PM</span>
                        </div>
                    </div>

                    {/* EMERGENCY */}
                    <div className="bg-[#BFD3D8] p-6 rounded-2xl hover:shadow-md transition duration-300">
                        <h3 className="font-semibold text-[#0A0A0A] mb-2">
                            Need Immediate Assistance?
                        </h3>

                        <p className="text-[#4A5565] text-sm mb-3">
                            For urgent matters, please call our 24/7 emergency line:
                        </p>

                        <p className="text-[#0C7489] font-semibold text-lg">
                            +1 678-715-1430
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default ContactSection;