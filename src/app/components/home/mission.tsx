const MissionSection = () => {
    return (
        <section id="mission" className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-stretch space-y-5 md:space-y-0 md:space-x-10">
                <div className="md:w-1/2 h-full">
                    <img src="/org/home/quotes-buffet.jpg" alt="Mission Image" className="w-full h-full object-cover rounded-lg shadow-lg" />
                </div>
                <div className="h-full md:w-1/2 text-center md:text-left space-y-5">
                    <h2 className="text-4xl font-bold mb-4">Our Mission & Vision</h2>
                    <p className="text-2xl max-w-xl">
                        At Adwait Investments, our mission is to simplify investments for everyone.
                        We envision a future where financial growth is accessible, transparent, and effortless.
                    </p>
                    <p className="text-lg max-w-xl">
                        Our vision is to empower individuals to achieve financial growth
                        and security through informed, disciplined, and value-driven investment strategies.
                        We are committed to delivering high-quality research, actionable insights,
                        and tailored solutions that help our clients navigate the complexities of the equity markets.
                    </p>
                    <p className="text-lg max-w-xl">
                        Rooted in the timeless principles of value investing and inspired by the teachings of Warren
                        Buffett, Benjamin Graham, and Sam Weinstein, we aim to foster a culture of long-term wealth creation
                        and sustainable success.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default MissionSection;
