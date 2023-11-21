// Salary.js
import React from 'react';
import './Salary.css'

const Salary = () => {
  return (
    <div>
      <h2>Salary Details</h2>

      <div className="salary-category">
        <h3>Fresher</h3>
        <p>Salary: 3,00,000 per year</p>
      </div>

      <div className="salary-category">
        <h3>Experienced</h3>
        <p>Salary: 6,00,000 per year</p>
      </div>

      <div className="salary-category">
        <h3>Experienced (more than 10 years)</h3>
        <p>Salary: 9,00,000 per year</p>
      </div>
    </div>
  );
}

export default Salary;
