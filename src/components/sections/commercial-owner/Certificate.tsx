import CertificateImg1 from "../../../../public/images/commercial/certificate-1.png";
import CertificateImg2 from "../../../../public/images/commercial/certificate-2.png";
import CertificateImg3 from "../../../../public/images/commercial/certificate-3.png";
import CertificateImg4 from "../../../../public/images/commercial/certificate-4.png";

const Certificate = () => {
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
                    Industry Certifications
                </h2>

            </div>
            <div
                className="
                grid grid-cols-1
                mt-10
                gap-12
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >
                <div
                    className="
                    flex flex-col gap-4
                    border border-[#E5E7EB]
                    items-center justify-center
                     rounded-lg p-4
                    hover:border-primary hover:shadow-lg transition duration-300
                  "
                    style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px 0 rgba(0, 0, 0, 0.10)" }}
                >
                    <img src={CertificateImg1} alt="OSHA10, OSHA30 Trained Employees" />
                    <p className="text-center text-[#101828] font-bold">
                        OSHA10, OSHA30 Trained Employees
                    </p>
                </div>
                <div
                    className="
                    flex flex-col gap-4
                    border border-[#E5E7EB]
                    items-center justify-center
                      rounded-lg p-4
                      hover:border-primary hover:shadow-lg transition duration-300
                  "
                    style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px 0 rgba(0, 0, 0, 0.10)" }}
                >
                    <img src={CertificateImg2} alt="Diverse Trade Workforce Certifications" />
                    <p className="text-center text-[#101828] font-bold">
                        Diverse Trade Workforce Certifications
                    </p>
                </div>
                <div
                    className="
                    flex flex-col gap-4
                    border border-[#E5E7EB]
                    items-center justify-center
                      rounded-lg p-4
                      hover:border-primary hover:shadow-lg transition duration-300
                  "
                    style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px 0 rgba(0, 0, 0, 0.10)" }}
                >
                    <img src={CertificateImg3} alt="Georgia Licensed Brokerage Firm" />
                    <p className="text-center text-[#101828] font-bold">
                        Georgia Licensed Brokerage Firm
                    </p>
                </div>
                <div
                    className="
                    flex flex-col gap-4
                    border border-[#E5E7EB]
                    items-center justify-center
                      rounded-lg p-4
                      hover:border-primary hover:shadow-lg transition duration-300
                  "
                    style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px 0 rgba(0, 0, 0, 0.10)" }}
                >
                    <img src={CertificateImg4} alt="Professional Neighborhood & Commercial Management Specialist" />
                    <p className="text-center text-[#101828] font-bold">
                        Professional Neighborhood &
                        Commercial Management Specialist
                    </p>
                </div>


            </div>
        </section>
    )
}

export default Certificate