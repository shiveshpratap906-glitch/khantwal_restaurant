function Hero() {
    return (
        <section id="home" className="hero">

            <div className="hero-content">

                <p className="hero-subtitle">
                    Welcome to TastyBite
                </p>

                <h1 className="hero-title">
                    Taste the <span>Difference</span>
                </h1>

                <p className="hero-description">
                    Fresh ingredients, delicious recipes, and unforgettable
                    flavors. Enjoy carefully prepared food made with passion.
                </p>

                <div className="hero-buttons">

                    <a href="#menu" className="primary-button">
                        View Our Menu
                    </a>

                    <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-button"
                    >
                        Order on WhatsApp
                    </a>

                </div>

            </div>

        </section>
    );
}

export default Hero;