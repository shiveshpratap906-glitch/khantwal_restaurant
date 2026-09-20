function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Brand */}

                <div className="footer-brand">

                    <a href="#home" className="footer-logo">
                        🍽️ TastyBite
                    </a>

                    <p>
                        Delicious food, warm hospitality, and memorable
                        moments. Made fresh, made with love.
                    </p>

                    <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-whatsapp"
                    >
                        💬 Order on WhatsApp
                    </a>

                </div>


                {/* Quick Links */}

                <div className="footer-column">

                    <h3>Quick Links</h3>

                    <a href="#home">Home</a>
                    <a href="#menu">Our Menu</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#about">About Us</a>
                    <a href="#contact">Contact</a>

                </div>


                {/* Contact */}

                <div className="footer-column">

                    <h3>Contact</h3>

                    <p>📍 123 Main Street, Your City</p>
                    <p>📞 +91 9368979993</p>
                    <p>✉️ hello@tastybite.com</p>

                </div>


                {/* Opening Hours */}

                <div className="footer-column">

                    <h3>Opening Hours</h3>

                    <p>Monday - Friday</p>
                    <strong>11:00 AM - 11:00 PM</strong>

                    <p className="footer-hours-gap">
                        Saturday - Sunday
                    </p>

                    <strong>11:00 AM - 12:00 AM</strong>

                </div>

            </div>


            {/* Bottom Footer */}

            <div className="footer-bottom">

                <p>
                    © 2026 TastyBite. All rights reserved.
                </p>

                <div className="footer-socials">
                    <a href="#" aria-label="Instagram">Instagram</a>
                    <a href="#" aria-label="Facebook">Facebook</a>
                </div>

            </div>

        </footer>
    );
}

export default Footer;