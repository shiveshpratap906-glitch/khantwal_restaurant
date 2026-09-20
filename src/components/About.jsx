function About() {
    return (
        <section id="about" className="about-section">

            <div className="about-container">

                {/* Image */}

                <div className="about-image-wrapper">
                    <img
                        src="/images/restaurant/interior.jpg"
                        alt="Restaurant interior"
                        className="about-image"
                    />

                    <div className="about-experience">
                        <strong>10+</strong>
                        <span>Years of<br />Experience</span>
                    </div>
                </div>


                {/* Content */}

                <div className="about-content">

                    <p className="section-subtitle">
                        ABOUT US
                    </p>

                    <h2>
                        Good Food.
                        <br />
                        <span>Great Memories.</span>
                    </h2>

                    <p className="about-description">
                        At TastyBite, we believe that great food is more than
                        just a meal. It is an experience that brings people
                        together.
                    </p>

                    <p className="about-description">
                        Our chefs carefully prepare every dish using fresh
                        ingredients, traditional techniques, and a touch of
                        creativity. From a quick lunch to a special evening,
                        we are here to make every visit memorable.
                    </p>


                    {/* Features */}

                    <div className="about-features">

                        <div className="about-feature">
                            <div className="feature-icon">
                                ✦
                            </div>

                            <div>
                                <h3>Fresh Ingredients</h3>
                                <p>
                                    Quality ingredients in every dish.
                                </p>
                            </div>
                        </div>


                        <div className="about-feature">
                            <div className="feature-icon">
                                ♨
                            </div>

                            <div>
                                <h3>Expert Chefs</h3>
                                <p>
                                    Crafted by passionate professionals.
                                </p>
                            </div>
                        </div>


                        <div className="about-feature">
                            <div className="feature-icon">
                                ♡
                            </div>

                            <div>
                                <h3>Made With Love</h3>
                                <p>
                                    Every dish prepared with care.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;