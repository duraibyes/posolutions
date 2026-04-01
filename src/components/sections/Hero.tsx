import HomeOwnerImage from "../../../public/images/home_owner_site.png";
import CommercialImage from "../../../public/images/commercial_site.png";
import PrimaryButton from "../button/PrimaryButton";
import { useNavigate } from "react-router-dom";

const Hero = () => {

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
                min-h-[500px] md:min-h-screen
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
                            Property & Community <br />
                            Management Made Simple
                        </h1>

                        <p
                            className="
                            max-w-3xl
                            mt-10 mx-auto
                            text-white/90 text-sm
                            sm:text-base
                            md:text-lg
                          "
                        >
                            Supporting homeowners, associations, commercial property owners,
                            and government agencies with reliable management solutions.
                        </p>
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
                        sm:gap-0 gap-4
                        md:grid-cols-2
                      "
                    >
                        {/* LEFT CARD */}
                        <div
                            className="
                            flex flex-col
                            p-8
                            bg-white
                            rounded-2xl
                            shadow-md
                            items-center justify-center /* Mobile */ /* Desktop */
                            md:rounded-none md:rounded-l-2xl md:border md:border-white md:border-r-0 md:shadow-lg
                          "
                        >
                            <h2
                                className="
                                mb-4
                                text-2xl font-bold text-[#0C7489]
                              "
                            >
                                Home Owners
                            </h2>

                            <img
                                src={HomeOwnerImage}
                                className="
                                mb-4
                                rounded-lg
                              "
                            />

                            <p
                                className="
                                my-2
                                text-[#969696]
                                mb-6
                              "
                            >
                                Manage your HOA account, pay dues, and submit service requests
                                through your secure homeowner portal.
                            </p>
                            <div className="mb-4 w-full">
                                <PrimaryButton label="Explore Our Services" onClick={() => navigate('/owner')} />
                            </div>
                        </div>

                        {/* RIGHT CARD */}
                        <div
                            className="
                            p-8
                            bg-[#0C7489]
                            rounded-2xl
                            flex flex-col  items-center justify-center
                            shadow-2xl shadow-md
                            
                            md:rounded-none md:rounded-r-2xl md:border-2 md:border-white md:shadow-lg
                          "
                        >
                            <h2
                                className="
                                mb-4
                                text-2xl font-bold text-white
                              "
                            >
                                Commercial Owners
                            </h2>

                            <img
                                src={CommercialImage}
                                className="
                                mb-4
                                rounded-lg
                              "
                            />

                            <p
                                className="
                                mb-6
                                my-2
                                text-white/90
                              "
                            >
                                Trusted management services for associations, commercial
                                property owners, and government agencies.
                            </p>
                            <div className="mb-4 w-full text-center">

                                <button
                                    onClick={() => navigate('/commercial-owner')}
                                    className="
            w-full
            px-6 py-2 font-semibold
            text-lg text-[#0C7489]
            bg-white
            rounded-md
            hover:bg-[#F0F0F0]
            transition-colors duration-300
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
};

export default Hero;
