import { useNavigate } from "react-router-dom";

import HomeOwnerImage from "../../../../public/images/services/banner-1.png";
import CommercialImage from "../../../../public/images/services/banner-2.png";
import PrimaryButton from "../../button/PrimaryButton";
import SecondaryRoundButton from "../../button/SecondaryRoundButton";
import PrimaryRoundButton from "../../button/PrimaryRoundButton";
import { Building2, Home } from "lucide-react";

const ServiceHero = () => {
    const navigate = useNavigate();
    return (
        <section
            className="
            overflow-hidden
            min-h-screen
            bg-white
            relative
          "
        >
            <div
                style={{
                    background: "#0C7489",
                    height: "845px",
                    borderBottomRightRadius: "45%",
                }}
                className="
                z-0
                w-full
                absolute top-0 left-0
              "
            />

            <div
                className="
                z-10 flex flex-col
                min-h-screen
                relative
              "
            >
                <div
                    className="
                    flex-1 flex
                    px-4
                    items-center justify-center
                  "
                >
                    <div
                        className="
                        max-w-5xl
                        mx-auto
                        text-center
                        mb-8
                      "
                    >
                        <h1
                            className="
                            text-[32px] font-bold text-white leading-tight
                            sm:text-[40px]
                            md:text-[52px]
                            lg:text-[64px]
                          "
                        >
                            Professional Asset <br /> Management Solutions
                        </h1>

                        <p
                            className="
                            max-w-3xl
                            my-10 mx-auto
                            text-white/90 text-sm
                            sm:text-base
                            md:text-lg
                          "
                        >
                            Comprehensive property and asset management services tailored for residential and commercial clients.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 my-4 mb-8 py-8 md:py-10 ">
                            <SecondaryRoundButton label="Residential Services" />
                            <PrimaryRoundButton label="Commercial Services" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className="
                    z-20
                    px-4 pb-16
                    -mt-40 relative
                  "
                >
                    <div
                        className="
                        grid grid-cols-1
                        md:max-w-4xl
                        max-w-2xl
                        mx-auto
                        gap-8
                        md:grid-cols-2
                      "
                    >
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">

                            {/* IMAGE */}
                            <img
                                src={HomeOwnerImage}
                                alt="Residential"
                                className="w-full h-56 sm:h-64 object-cover border-r-0"
                            />

                            {/* CONTENT */}
                            <div className="p-6 flex flex-col flex-grow">

                                {/* TITLE */}
                                <div className="flex items-center gap-3 mb-3">
                                    <Home className="text-[#0C7489]" />
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Residential
                                    </h3>
                                </div>

                                {/* DESCRIPTION */}
                                <p className="text-[#4A5565] text-sm sm:text-base mb-4">
                                    Expert management services for homeowners, providing peace of mind
                                    and maximizing property value.
                                </p>

                                {/* LIST */}
                                <ul className="space-y-2 text-gray-700 text-sm mb-6">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#0C7489] rounded-full" />
                                        Property Maintenance
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#0C7489] rounded-full" />
                                        Financial Planning
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#0C7489] rounded-full" />
                                        Portfolio Management
                                    </li>
                                </ul>

                                {/* BUTTON */}

                                <PrimaryButton label="Explore Our Services" onClick={() => navigate('/owner')} />

                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">

                            {/* IMAGE */}
                            <img
                                src={CommercialImage}
                                alt="Commercial"
                                className="w-full h-56 sm:h-64 object-cover"
                            />

                            {/* CONTENT */}
                            <div className="p-6 flex flex-col flex-grow">

                                {/* TITLE */}
                                <div className="flex items-center gap-3 mb-3">
                                    <Building2 className="text-[#0C7489]" />
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Commercial
                                    </h3>
                                </div>

                                {/* DESCRIPTION */}
                                <p className="text-gray-600 text-sm sm:text-base mb-4">
                                    Comprehensive solutions for businesses, optimizing asset
                                    performance and ROI.
                                </p>

                                {/* LIST */}
                                <ul className="space-y-2 text-gray-700 text-sm mb-6">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#0C7489] rounded-full" />
                                        Asset Optimization
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#0C7489] rounded-full" />
                                        Risk Management
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#0C7489] rounded-full" />
                                        Strategic Advisory
                                    </li>
                                </ul>

                                {/* BUTTON */}

                                <button
                                    onClick={() => navigate("/commercial-owner")}
                                    className="
                            mt-auto
                            w-full
                            py-3
                            rounded-lg
                            border border-[#0C7489]
                            text-[#0C7489]
                            font-semibold
                            hover:bg-[#0C7489] hover:text-white
                            transition
              "
                                >
                                    Explore Our Services
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceHero