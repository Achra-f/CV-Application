import React from 'react';

const Experience = ({ onChange }) => {
  return (
    <div className="form-section">
      <h2>Practical Experience</h2>
      <form>
        <label>Company Name:</label>
        <input type="text" onChange={(e) => onChange({ company: e.target.value })} />
        <label>Position Title:</label>
        <input type="text" onChange={(e) => onChange({ position: e.target.value })} />
        <label>Main Responsibilities:</label>
        <textarea onChange={(e) => onChange({ responsibilities: e.target.value })}></textarea>
        <label>Start Date:</label>
        <input type="text" onChange={(e) => onChange({ startDate: e.target.value })} />
        <label>End Date:</label>
        <input type="text" onChange={(e) => onChange({ endDate: e.target.value })} />
      </form>
    </div>
  );
};

export default Experience;
