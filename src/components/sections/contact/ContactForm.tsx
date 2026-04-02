import { Send } from 'lucide-react'

const ContactForm = () => {
    return (
        <form className="space-y-5">

            <div>
                <label className="block text-sm font-medium mb-2">
                    Full Name *
                </label>
                <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0C7489]"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">
                    Email Address *
                </label>
                <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0C7489]"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">
                    Phone Number *
                </label>
                <input
                    type="text"
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0C7489]"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">
                    Message
                </label>
                <textarea
                    rows={5}
                    placeholder="Write us..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0C7489]"
                />
            </div>

            <button
                type="submit"
                className="
                w-full
                flex items-center justify-center gap-2
                px-6 py-3
                bg-[#0C7489]
                text-white font-semibold
                rounded-xl
                hover:bg-[#0A5F70]
                transition
              "
            >
                <Send size={18} />
                Send Message
            </button>

        </form>
    )
}

export default ContactForm