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
                        POSolutions, Inc. was founded in 2004 by our President, Shandron Forte, a licensed Broker with the Georgia Real Estate Commission. What began as a vision to deliver dependable and results-driven property management has grown into a trusted industry leader. Over the years, we have built a strong foundation by attracting top talent and continuously evolving to meet the needs of a dynamic market.
                    </p>

                    <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-2">
                        Our success is rooted in long-term relationships and consistent performance. With an impressive 98% client retention rate, we take pride in delivering measurable results while maintaining a high standard of service. Our portfolio spans a diverse range of clients—including developers, corporate organizations, local agencies, and government entities—managing assets of all sizes with precision and care.
                    </p>

                    <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-2">
                        Beyond traditional property management, our expertise extends into Building & Facilities Maintenance, Financial Recovery, and Neighborhood Management Programs. This comprehensive approach allows us to provide end-to-end solutions that not only protect assets but also enhance their long-term value.
                    </p>

                    <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-2">
                        Today, we manage nearly 10,000 units across the Atlanta Metro Area and oversee approximately $7.5 million in association funds. Our mission goes beyond management—we are deeply committed to strengthening communities by delivering services that promote growth, stability, and sustainability.
                    </p>

                    <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-2">
                        Headquartered in the Historic District of Downtown Douglasville, just 20 miles west of Atlanta, our team is strategically positioned to serve the entire metro area. Whether you're looking to optimize existing assets or scale your portfolio, POSolutions is here to help you move forward with confidence.
                    </p>

                </div>
            </div>
        </section>
    )
}

export default OurStory