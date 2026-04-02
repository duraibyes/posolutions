import ImageWithSkeleton from '../../common/ImageWithSkeleton'
import OurStoryImg from "../../../../public/images/about/ourstory.png";

const OurStory = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12 my-12">
            <div className='mb-4'>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-[#0C0047]">
                    Our Story
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-2 gap-8 items-start">
                <div className="w-full">
                    <ImageWithSkeleton
                        src={OurStoryImg}
                        alt="Our Story"
                        className="w-full h-[300px] sm:h-[400px] lg:h-full object-cover rounded-2xl"
                    />
                </div>
                <div className='flex flex-col items-start justify-start'>
                    <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-2">
                        POSolutions, Inc. was first established in 2004 by our President, Shandron Forte, a licensed Broker with the Georgia Real Estate Commission. We have invested nearly two decades into accumulating top talent while strategically scaling our business to become the leading provider of property management services. With a revolving 98% retention rate, evidence of our hard work, dedication, and commitment to our clients’ success is displayed through the results we produce. As a team, and an organization, POSolutions proudly reflects on the proven track record we’ve established with communities throughout the state.
                    </p>
                    <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-2">
                        Our work has helped owners and investors from every background, managing portfolios of all sizes for developers, corporate entities, local county agencies, as well as government affiliates. Specializing in all areas of Real Estate and Asset Management, our offering also expands into various areas including Building & Facilities Maintenance, Financial Recovery and Neighborhood Management Programs.
                    </p>
                    <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-2">
                        Currently managing nearly 10K units throughout the Atlanta Metro Area, our firm oversees approximately $7.5 million in association funds. Committed to serving our community at every level, we strive to foster the growth and development of our neighborhoods by providing distinctive services that allow us to educate and motivate our clients to build stronger, safer communities that preserve value.
                    </p>
                    <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-2">
                        Based in the Historic District of Downtown Douglasville, and approximately 20 miles west of Atlanta, our offices are easily accessible to the entire metro area. Submit a Request for Proposal today for a full synopsis of how our licensed brokers, sales agents, property managers, and experienced maintenance teams can help you expand your dreams.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default OurStory