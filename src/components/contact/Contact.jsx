import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-box">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <p>P. Remedio St., Banilad, Mandaue City</p>
          <p>(+63) 933 467 7279</p>
          <p>rachelremedio_j@yahoo.com</p>
        </div>
        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3924.90128964341!2d123.9163145!3d10.3497775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999c8e8e9beeb%3A0xb28ecc8c5e4b4ab1!2sRae%20Angela&#39;s%20Delectables!5e0!3m2!1sen!2sph!4v1718963075010!5m2!1sen!2sph"
            width="800"
            height="450"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          />
        </div>
      </div>
    </div>
  )
}

export default Contact;