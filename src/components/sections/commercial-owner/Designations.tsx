import DesignationImg1 from "../../../../public/images/commercial/designation-1.png";
import DesignationImg2 from "../../../../public/images/commercial/designation-2.png";
import DesignationImg3 from "../../../../public/images/commercial/designation-3.png";
import DesignationImg4 from "../../../../public/images/commercial/designation-4.png";
import DesignationImg5 from "../../../../public/images/commercial/designation-5.png";
import DesignationImg6 from "../../../../public/images/commercial/designation-6.png";


const Designations = () => {
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
                    text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[##0A0A0A]
                  "
                >
                    Socio-Economic Designations
                </h2>

            </div>
            <div
                className="
                grid grid-cols-1
                mt-10
                gap-12
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-6
              "
            >
                <div
                    className="
                    flex flex-col
                    items-center justify-center
                     rounded-lg p-4
                    hover:border-primary hover:shadow-lg transition duration-300
                  "
                >
                    <img src={DesignationImg1} alt="Asset Management" />
                </div>
                <div
                    className="
                    flex flex-col
                    items-center justify-center
                      rounded-lg p-4
                      hover:border-primary hover:shadow-lg transition duration-300
                  "
                >
                    <img src={DesignationImg2} alt="Financial Recovery Services" />
                </div>
                <div
                    className="
                    flex flex-col
                    items-center justify-center
                      rounded-lg p-4
                      hover:border-primary hover:shadow-lg transition duration-300
                  "
                >
                    <img src={DesignationImg3} alt="Association Management " />
                </div>
                <div
                    className="
                    flex flex-col
                    items-center justify-center
                      rounded-lg p-4
                      hover:border-primary hover:shadow-lg transition duration-300
                  "
                >
                    <img src={DesignationImg4} alt="Real Estate Brokerage Services " />
                </div>
                <div
                    className="
                    flex flex-col
                    items-center justify-center
                      rounded-lg p-4
                      hover:border-primary hover:shadow-lg transition duration-300
                  "
                >
                    <img src={DesignationImg5} alt="Real Estate Brokerage Services " />
                </div>
                <div
                    className="
                    flex flex-col
                    items-center justify-center
                      rounded-lg p-4
                      hover:border-primary hover:shadow-lg transition duration-300
                  "
                >
                    <img src={DesignationImg6} alt="Real Estate Brokerage Services " />
                </div>
            </div>
        </section>
    )
}

export default Designations