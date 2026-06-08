import { Link } from "react-router-dom";
import Logo from "../../../public/images/footer_logo.png";
import FooterImg1 from "../../../public/images/fb.png";
import FooterImg2 from "../../../public/images/ig.png";
import FooterImg3 from "../../../public/images/lin.png";

const Footer = () => {

    return (
        <footer className="bg-[#F7F7F7] mt-16">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <div className="grid grid-cols-1 sm:grid-cols-2 py-4 lg:grid-cols-4 gap-10">

                    <div className="text-center sm:text-left flex flex-col justify-center ">
                        <img src={Logo} alt="logo" className="mb-4 mx-auto sm:mx-0" />

                        <p className="text-gray-600 leading-relaxed ml-4 my-4">
                            Helping businesses grow with smart and scalable technology solutions.
                        </p>
                    </div>

                    <div className=" flex flex-col justify-center  text-center sm:text-left">
                        <h3 className="font-semibold text-lg mb-4 text-gray-800">
                            Our Services
                        </h3>

                        <ul className="space-y-2 text-gray-600">
                            <li>
                                <Link to="/association-management" className="hover:text-primary block">
                                    Association Management
                                </Link>
                            </li>
                            <li>
                                <Link to="/commercial-services" className="hover:text-primary block">
                                    Commercial Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/financial-recovery-services" className="hover:text-primary block">
                                    Financial Recovery
                                </Link>
                            </li>
                            <li>
                                <Link to="/real-estate-brokerage" className="hover:text-primary block">
                                    Real Estate Brokerage Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-center text-center sm:text-left w-full lg:w-[120%]">
                        <h3 className="font-semibold text-lg mb-4 text-gray-800">
                            Get Support
                        </h3>

                        <ul className="space-y-2 text-gray-600">
                            <li>Monday – Thursday | 8:00am – 5:00pm</li>
                            <li>Friday | 8:00am – 3:00pm</li>
                            <li className="font-semibold text-gray-800 pt-4">
                                MEETINGS BY APPOINTMENT ONLY
                            </li>
                            <li>678-715-1430</li>
                            <li>
                                <a
                                    href="mailto:info@posolutions.net"
                                    className="hover:text-primary transition"
                                >
                                    info@posolutions.net
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center sm:text-left lg:text-right">
                        <ul className="space-y-8 text-gray-700">
                            <li className="hover:text-primary cursor-pointer">
                                <a href="https://www.facebook.com/POSolutionsInc/" target="_blank">
                                    <img src={FooterImg1} alt="social" className="inline-block mr-2 w-[150px]" />
                                </a>
                            </li>
                            <li className="hover:text-primary cursor-pointer">
                                <a href="https://www.instagram.com/posolutions/" target="_blank">
                                    <img src={FooterImg2} alt="social" className="inline-block mr-2 w-[150px]" />
                                </a>
                            </li>
                            <li className="hover:text-primary cursor-pointer">
                                <a href="https://www.linkedin.com/company/posolutions-llc/" target="_blank" className="w-full h-full">
                                    <img src={FooterImg3} alt="social" className="inline-block ml-1 md:ml-0 md:mr-1  w-[150px]" />
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="text-center text-gray-500 text-sm mt-10 border-t pt-6">
                    ©2026 POSolutions. All right reserved
                </div>

            </div>

        </footer>
    );
};

export default Footer;