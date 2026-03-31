import Partner1 from "../../../public/images/partner-1.png";
import Partner2 from "../../../public/images/partner-2.png";
import Partner3 from "../../../public/images/partner-3.png";
import Partner4 from "../../../public/images/partner-4.png";
import Partner5 from "../../../public/images/partner-5.png";

const Partners = () => {
    return (
        <section
            className="
            flex flex-col
            max-w-7xl
            mx-auto px-4
            items-center justify-center
            md:px-4
            xl:px-2
            py-16
            my-16
          "
        >
            <div>
                <h2
                    className="
                    mb-8
                    text-3xl font-bold text-center text-[#0C0047]
                  "
                >
                    Partners We Work With
                </h2>
                <p
                    className="
                    text-[#969696] text-center
                  "
                >
                    Collaborating with trusted professionals and organizations
                </p>
            </div>
            <div
                className="
                grid grid-cols-1
                mt-10
                gap-8
                sm:grid-cols-2
                lg:grid-cols-5
              "
            >
                <div
                    className="
                    flex flex-col
                    items-center justify-center
                    border border-[#E0E0E0] rounded-lg p-4
                  "
                >
                    <img src={Partner4} alt="Asset Management" />
                </div>
                <div
                    className="
                    flex flex-col
                    items-center justify-center
                     border border-[#E0E0E0] rounded-lg p-4
                  "
                >
                    <img src={Partner3} alt="Financial Recovery Services" />
                </div>
                <div
                    className="
                    flex flex-col
                    items-center justify-center
                     border border-[#E0E0E0] rounded-lg p-4
                  "
                >
                    <img src={Partner2} alt="Association Management " />
                </div>
                <div
                    className="
                    flex flex-col
                    items-center justify-center
                     border border-[#E0E0E0] rounded-lg p-4
                  "
                >
                    <img src={Partner1} alt="Real Estate Brokerage Services " />
                </div>
                <div
                    className="
                    flex flex-col
                    items-center justify-center
                     border border-[#E0E0E0] rounded-lg p-4
                  "
                >
                    <img src={Partner5} alt="Real Estate Brokerage Services " />
                </div>
            </div>
        </section>
    );
};

export default Partners;
