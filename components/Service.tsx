const services = [
    { id: '01', title: 'Web Design', description: 'Crafting visually stunning and user-friendly websites tailored to your brand\'s identity and goals.' },
    { id: '02', title: 'Mobile Application', description: 'Crafting visually stunning, intuitive, and user-friendly mobile apps tailored to your brands identity and goals.' },
    { id: '03', title: 'UX/UI Design', description: 'Creating intuitive and engaging user experiences and interfaces that prioritize user satisfaction and ease of use.' },
]

export const Services = () => {
    return (
        <section className="text-white py-20">
            <div className="container mx-auto flex flex-col lg:flex-row gap-6 px-6">
                <div className="lg:w-1/4 pr-2 mb-12 lg:mb-0">
                    <h2 className="text-4xl sm:text-5xl text-blue-500 font-extrabold sticky top-20">
                        SERVICES
                    </h2>
                </div>

                <div className="lg:w-3/4">
                    {services.map(service => (
                        <div key={service.id} className="mb-12 flex flex-col sm:flex-row items-start">
                            <div className="text-blue-500 font-bold text-5xl sm:text-6xl mr-0 sm:mr-6 mb-2 sm:mb-0">
                                {service.id}
                            </div>
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-bold mb-2 leading-snug">
                                    {service.title}
                                </h3>
                                <p className="text-base sm:text-lg leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
