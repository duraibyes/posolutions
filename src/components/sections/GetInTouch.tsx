import CityView from "../../../public/images/city_view.png";
import Mask1 from "../../../public/images/Mask.png";
import Mask2 from "../../../public/images/Mask1.png";
import Mask3 from "../../../public/images/Mask3.png";
import Mask4 from "../../../public/images/Mask4.png";
import PrimaryButton from "../button/PrimaryButton";

const GetInTouch = () => {
    return (
        <div className="bg-[#F2F2FF] py-12 lg:py-0">

            <section className="mx-auto ">

                <div className="flex flex-col lg:flex-row items-center gap-8 md:my-14 my-0">

                    {/* LEFT CONTENT */}
                    <div className="w-full lg:w-3/4 text-center lg:text-left px-4 sm:px-8 lg:px-16 sm:mx-16 mx-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0C0047] mb-4">
                            Get in touch with us
                        </h2>

                        <p className="text-[#969696] text-sm sm:text-base">
                            Looking for help? Call us +1 678-715-1430
                        </p>
                        <div className="relative my-6 flex items-center justify-center lg:justify-start">

                            <div className="relative flex items-center">

                                <img src={Mask1} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
                                <img src={Mask2} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full -ml-3" />
                                <img src={Mask3} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full -ml-3" />
                                <img src={Mask4} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full -ml-3" />

                                <p className="ml-3 text-xs sm:text-sm text-[#343434] font-semibold whitespace-nowrap">
                                    More than 10,000 people have tried
                                </p>

                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-start my-4">
                            <PrimaryButton label="Request Proposal" />
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-full lg:w-2/4 relative ">
                        <div
                            className="
                bg-primary 
                w-full
                h-[250px] sm:h-[300px] md:h-[400px] lg:h-[600px]
                lg:flex items-center justify-center hidden
              "
                            style={{ borderBottomLeftRadius: '85%' }}
                        >
                            <img
                                src={CityView}
                                alt="City View"
                                className=" w-[70%] sm:w-[60%] md:w-[50%] lg:w-full
                  object-contain
                  lg:absolute
                  lg:left-[-20%]
                  lg:top-[17%]"

                            />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default GetInTouch;
