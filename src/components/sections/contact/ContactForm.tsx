import { Send } from 'lucide-react'
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from '../../../utils/email';

const ContactForm = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState<any>({});
    const [status, setStatus] = useState(""); // success / error message
    const [loading, setLoading] = useState(false);

    // 🔹 Handle Change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // 🔹 Validation
    const validate = () => {
        const newErrors: any = {};

        if (!form.name) newErrors.name = "Full name is required";

        if (!form.email) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            newErrors.email = "Invalid email";
        }

        if (!form.phone) {
            newErrors.phone = "Phone is required";
        } else if (!/^[0-9+\-\s()]{8,}$/.test(form.phone)) {
            newErrors.phone = "Invalid phone number";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // 🔹 Submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        setLoading(true);
        setStatus("");

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                form,
                PUBLIC_KEY
            );

            setStatus("✅ Message sent successfully!");
            setForm({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            setStatus("❌ Failed to send message. Please try again.");
        }

        setLoading(false);
    };


    return (
        <form className="space-y-5" onSubmit={handleSubmit}>

            <div>
                <label className="block text-sm font-medium mb-2">
                    Full Name *
                </label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200  focus:outline-none focus:ring-2 focus:ring-[#0C7489]"
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">
                    Email Address *
                </label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200  focus:outline-none focus:ring-2 focus:ring-[#0C7489]"
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">
                    Phone Number *
                </label>
                <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200  focus:outline-none focus:ring-2 focus:ring-[#0C7489]"

                />
                {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">
                    Message
                </label>
                <textarea
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write us..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200  focus:outline-none focus:ring-2 focus:ring-[#0C7489]"
                />
            </div>

            {/* Status Message */}
            {status && (
                <p className="text-center text-sm font-medium">
                    {status}
                </p>
            )}

            <button
                disabled={loading}
                type="submit"
                className={`
                w-full
                flex items-center justify-center gap-2
                px-6 py-3
                text-white font-semibold
                rounded-xl
                ${loading ? "bg-gray-300" : "bg-[#0C7489] text-white hover:bg-[#0A5F70]"}
                transition
              `}
            >
                <Send size={18} />
                {loading ? "Sending..." : "Send Message"}
            </button>

        </form>
    )
}

export default ContactForm