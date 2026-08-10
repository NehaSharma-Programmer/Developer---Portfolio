


import "../styles/contact.css";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://developer-portfolio-oulh.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>

          <p>📍 Meerut, India</p>

          <p>📧 nehasha952@gmail.com</p>

          <p>📞 +91-9582953685</p>

          <p>
            Github:{" "}
            <a
              href="https://github.com/NehaSharma-Programmer"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/NehaSharma-Programmer
            </a>
          </p>

          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/neha-sharma-7099a0327"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/neha-sharma-7099a0327
            </a>
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

