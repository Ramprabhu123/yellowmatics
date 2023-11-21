// Contact.js
import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      
      <div className="contact-info">
        <p><strong>Phone Number:</strong> +1 (555) 123-4567</p>
        <p><strong>Address:</strong> 123 Tech Street, Cityville, State, 12345</p>
        <p><strong>Email:</strong> info@example.com</p>
        <p><strong>Technical HR:</strong></p>
        <ul>
          <li><strong>Name:</strong> John Doe</li>
          <li><strong>Email:</strong> john.doe@example.com</li>
          <li><strong>Phone Number:</strong> +1 (555) 987-6543</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
