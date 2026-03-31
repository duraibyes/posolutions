
const Home = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 flex flex-col">
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                        Property & Community
                        <br />
                        Management Made Simple
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                        Supporting homeowners, associations, commercial property owners,
                        <br className="hidden sm:block" />
                        and government agencies with reliable management solutions.
                    </p>
                </div>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                            <div className="p-8 sm:p-10">
                                <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 mb-6">
                                    Home Owners
                                </h2>
                                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden">
                                    <img
                                        src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800"
                                        alt="Residential Property"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-teal-700/90 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 border-2 border-teal-400">
                            <div className="p-8 sm:p-10">
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                                    Commercial Owners
                                </h2>
                                <div className="aspect-video bg-gradient-to-br from-teal-800 to-blue-900 rounded-lg overflow-hidden">
                                    <img
                                        src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
                                        alt="Commercial Property"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Home