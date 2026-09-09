import { useState } from "react";

function Navbar({ cartCount, onCartClick }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">

            <div className="nav-container">

                {/* Logo */}

                <a
                    href="#home"
                    className="logo"
                    onClick={closeMenu}
                >
                    <span>🍽️</span> TastyBite
                </a>


                {/* Desktop Navigation */}

                <div className="nav-links">

                    <a href="#home">Home</a>
                    <a href="#menu">Menu</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>

                </div>


                {/* Desktop Actions */}

                <div className="nav-actions">

                    <button
                        className="cart-button"
                        onClick={onCartClick}
                    >
                        🛒 Cart

                        {cartCount > 0 && (
                            <span className="cart-count">
                                {cartCount}
                            </span>
                        )}
                    </button>


                    <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-button"
                    >
                        Order on WhatsApp
                    </a>

                </div>


                {/* Mobile Menu Button */}

                <button
                    className="mobile-menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {menuOpen ? "×" : "☰"}
                </button>

            </div>


            {/* Mobile Navigation */}

            {menuOpen && (
                <div className="mobile-menu">

                    <a href="#home" onClick={closeMenu}>
                        Home
                    </a>

                    <a href="#menu" onClick={closeMenu}>
                        Menu
                    </a>
                    <a href="#gallery" onClick={closeMenu}>
                        Gallery
                    </a>
                    <a href="#about" onClick={closeMenu}>
                        About
                    </a>

                    <a href="#contact" onClick={closeMenu}>
                        Contact
                    </a>


                    <button
                        className="mobile-cart-button"
                        onClick={() => {
                            onCartClick();
                            closeMenu();
                        }}
                    >
                        🛒 Cart

                        {cartCount > 0 && (
                            <span className="cart-count">
                                {cartCount}
                            </span>
                        )}
                    </button>


                    <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mobile-whatsapp-button"
                    >
                        💬 Order on WhatsApp
                    </a>

                </div>
            )}

        </nav>
    );
}

export default Navbar;