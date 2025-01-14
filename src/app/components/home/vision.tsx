const VisionSection = () => {
    return (
        <section id="vision" className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20">
            <div className="container mx-auto text-center space-y-5">
                <h2 className="text-4xl font-bold mb-4">Our Investment Philosophy</h2>
                <p className="text-lg max-w-xl mx-auto">
                    At the heart of Adwait Investments lies a deep belief in the principles of value investing and the
                    power of long-term growth.
                </p>
                <p className={"text-3xl max-w-xl mx-auto text-left"}>
                    Our philosophy is guided by:
                </p>
                <div className="text-lg max-w-xl mx-auto text-left list-disc list-inside space-y-2">
                    <li> The Teachings of Visionaries: Drawing wisdom from Warren Buffett’s focus on intrinsic
                        value,
                        Benjamin Graham’s emphasis on margin of safety, and Sam Weinstein’s insights into market
                        trends.
                    </li>
                    <li> Fundamental and Technical Excellence: Combining rigorous fundamental analysis with
                        technical
                        insights to uncover stocks and assets that align with our clients' financial goals.
                    </li>
                    <li> Comprehensive Valuation Frameworks: Leveraging methodologies such as CANSLIM, momentum
                        investing, and growth investing to adapt to diverse market conditions and client needs.
                    </li>
                    <li> Diversified Recommendations: Providing expert guidance on mutual funds and ETFs to help
                        clients
                        build resilient and well-rounded portfolios.
                    </li>
                </div>
            </div>
        </section>
    );
}

export default VisionSection;