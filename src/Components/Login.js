// Contact.js
import React, { useState } from 'react';
import './Login.css'

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    qualification: '',
    dob: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional actions here with the form data
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label htmlFor="qualification">Qualification:</label>
        <input
          type="text"
          id="qualification"
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          required
        />

        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {formData.name && formData.age && formData.qualification && formData.dob && (
        <div>
          <h3>Submitted Information</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Age:</strong> {formData.age}</p>
          <p><strong>Qualification:</strong> {formData.qualification}</p>
          <p><strong>Date of Birth:</strong> {formData.dob}</p>
        </div>
      )}
    </div>
  );
}

export default Login;
