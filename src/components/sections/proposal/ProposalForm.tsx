import { Calendar, Send } from "lucide-react"
import { ContactMethod, InquireServices } from "../../../utils/config"
import DatePicker from "react-datepicker"
import Input from "../../common/Input"
import { useState } from "react"
import emailjs from "@emailjs/browser";

const ProposalForm = () => {

    const [date, setDate] = useState<Date | null>(null);

    const [form, setForm] = useState({
        fullName: "",
        businessName: "",
        email: "",
        phone: "",
        address: "",
        contactMethod: "",
        associationName: "",
        managementCompany: "",
        homes: "",
        services: "",
        inquireService: "",
        additionalInfo: "",
        currentContract: "",
    })

    const [errors, setErrors] = useState<any>({});

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors: any = {};

        if (!form.fullName) newErrors.fullName = "Required";
        if (!form.email) newErrors.email = "Required";
        if (!form.phone) newErrors.phone = "Required";
        if (!form.homes) newErrors.homes = "Required";

        // Email validation
        if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
            newErrors.email = "Invalid email";
        }

        // Phone validation (simple)
        if (form.phone && !/^[0-9+\-\s()]{8,}$/.test(form.phone)) {
            newErrors.phone = "Invalid phone";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!validate()) return;
        console.log("Form Data:", { ...form, date: date?.toLocaleDateString() });

        emailjs
            .send(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                {
                    ...form,
                    date: date?.toLocaleDateString(),
                },
                "YOUR_PUBLIC_KEY"
            )
            .then(() => {
                alert("Email sent successfully!");
            })
            .catch(() => {
                alert("Failed to send email");
            });
    };

    const isValid =
        form.fullName &&
        form.email &&
        form.phone &&
        form.homes &&
        /^\S+@\S+\.\S+$/.test(form.email) &&
        /^[0-9+\-\s()]{8,}$/.test(form.phone);

    console.log("Form Valid:", isValid);

    return (
        <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                Request Proposal
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>

                <Input name="fullName" label="Full Name *" placeholder="John Doe" onChange={handleChange} value={form.fullName} error={errors.fullName} />
                <Input name="businessName" label="Business Name *" placeholder="ABC LLC" onChange={handleChange} value={form.businessName} error={errors.businessName} />
                <Input name="email" label="Email Address *" placeholder="john@example.com" onChange={handleChange} value={form.email} error={errors.email} />
                <Input name="phone" label="Phone Number *" placeholder="+1 (555) 123-4567" onChange={handleChange} value={form.phone} error={errors.phone} />
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Full Address
                    </label>
                    <textarea
                        name="fullAddress"
                        placeholder="No 12A, Park Street..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0C7489] resize-none h-22"
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">
                        Preferred Contact Method
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0C7489]">
                        {ContactMethod.map((item) => (
                            <option key={item.id}>{item.method}</option>
                        ))}
                    </select>
                </div>
                <Input name="associationName" label="Association Name (If Applicable)" placeholder="Riverdale Association" onChange={handleChange} value={form.associationName} />
                <Input name="currentContract" label="Are You Currently Under Contract With A Different Management Company? If so, who?" placeholder="ABC LLC" onChange={handleChange} value={form.currentContract} />
                <Input name="homes" type="number" label="No. of homes *" placeholder="16" onChange={handleChange} value={form.homes} />
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Contract Termination Date
                    </label>

                    <div className="relative w-full">
                        <DatePicker
                            selected={date}
                            onChange={(date: Date | null) => setDate(date)}
                            placeholderText="MM/DD/YYYY"
                            className="
        w-full px-4 py-3 pr-10
        rounded-xl border border-gray-200
       
        focus:outline-none focus:ring-2 focus:ring-[#0C7489]
      "
                            wrapperClassName="w-full"
                        />

                        {/* Calendar Icon */}
                        <Calendar
                            size={18}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Which Services Are You Inquiring About?
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0C7489]"
                        name="inquireService"
                        onChange={handleChange}
                        value={form.inquireService}
                    >
                        {InquireServices.map((item) => (
                            <option key={item.id}>{item.service}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Additional Information
                    </label>
                    <textarea
                        name="additionalInfo"
                        placeholder="Tell us about your needs..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0C7489] resize-none h-32"
                        onChange={handleChange}
                        value={form.additionalInfo}
                    ></textarea>
                </div>

                {/* BUTTON */}
                <button
                    type="submit"
                    disabled={!isValid}
                    className={`
            w-full px-6 py-3 rounded-xl flex items-center justify-center ${!isValid ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-[#0C7489] text-white"}
          `}
                >
                    <span className="mr-2"><Send /></span>
                    Submit Request
                </button>

            </form>
        </div>
    )
}

export default ProposalForm