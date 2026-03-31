import Logo from "../../../public/images/pos_logo-1.png";

const Footer = () => {
    return (
        <footer className="bg-[#F7F7F7] mt-16">

            <div className="max-w-7xl mx-auto py-12">

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* LEFT - LOGO + TEXT */}
                    <div>
                        <img src={Logo} alt="logo" className="mb-4" />

                        <p className="text-gray-600 leading-relaxed">
                            Managing Communities.
                            <br />
                            Supporting Property Success.
                        </p>
                    </div>

                    {/* SERVICES */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-gray-800">
                            Our Services
                        </h3>

                        <ul className="space-y-2 text-gray-600">
                            <li>Association Management</li>
                            <li>Financial Recovery</li>
                            <li>Real Estate Brokerage Services</li>
                            <li>Asset Management</li>
                        </ul>
                    </div>

                    {/* SUPPORT */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-gray-800">
                            Get Support
                        </h3>

                        <ul className="space-y-2 text-gray-600">
                            <li>Monday – Thursday | 8:00am – 5:00pm</li>
                            <li>Friday | 8:00am – 3:00pm</li>
                            <li className="font-semibold text-gray-800">
                                MEETINGS BY APPOINTMENT ONLY
                            </li>
                            <li>+1 678-715-1430</li>
                        </ul>
                    </div>

                    {/* SOCIAL */}
                    <div className=" w-full">


                        <ul className="space-y-3 text-gray-700 flex flex-col justify-end items-end w-full">
                            <li className="hover:text-primary cursor-pointer">Facebook</li>
                            <li className="hover:text-primary cursor-pointer">Instagram</li>
                            <li className="hover:text-primary cursor-pointer">YouTube</li>
                        </ul>
                    </div>

                </div>

                {/* BOTTOM */}
                <div className="text-center text-gray-500 text-sm mt-10 border-t pt-6">
                    ©2026 POSolutions. All right reserved
                </div>

            </div>

        </footer>
    );
};

export default Footer;