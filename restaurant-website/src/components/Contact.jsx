import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappNumber = "919876543210";

    const whatsappMessage = `Hello TastyBite,

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        {/* Contact Information */}

        <div className="contact-info">

          <p className="section-subtitle">
            GET IN TOUCH
          </p>

          <h2>
            We'd Love to
            <br />
            <span>Hear From You.</span>
          </h2>

          <p className="contact-description">
            Have a question, feedback, or simply want to know
            more about our food? Feel free to get in touch with us.
          </p>


          <div className="contact-details">

            <div className="contact-item">
              <div className="contact-icon">
                📍
              </div>

              <div>
                <h3>Visit Us</h3>
                <p>
                  123 Main Street, Your City
                </p>
              </div>
            </div>


            <div className="contact-item">
              <div className="contact-icon">
                📞
              </div>

              <div>
                <h3>Call Us</h3>
                <p>
                  +91 98765 43210
                </p>
              </div>
            </div>


            <div className="contact-item">
              <div className="contact-icon">
                ✉️
              </div>

              <div>
                <h3>Email Us</h3>
                <p>
                  hello@tastybite.com
                </p>
              </div>
            </div>


            <div className="contact-item">
              <div className="contact-icon">
                🕐
              </div>

              <div>
                <h3>Opening Hours</h3>
                <p>
                  Mon - Sun: 11:00 AM - 11:00 PM
                </p>
              </div>
            </div>

          </div>


          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-whatsapp"
          >
            💬 Chat with us on WhatsApp
          </a>

        </div>


        {/* Contact Form */}

        <div className="contact-form-wrapper">

          <h3>Send Us a Message</h3>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="name">
                Your Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>


            <div className="form-group">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>


            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>


            <button
              type="submit"
              className="contact-submit"
            >
              💬 Send via WhatsApp
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;