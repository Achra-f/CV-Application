import React from "react";

const Experience = ({ value, onChange }) => {
  return (
    <div className="flex flex-col">
      <h2 className="flex justify-center">Practical Experience</h2>
      <form className="flex flex-col">
        <label>Company Name:</label>
        <input
          type="text"
          placeholder="Company Name"
          value={value.company}
          onChange={(e) => onChange({ company: e.target.value })}
        />
        <label>Position Title:</label>
        <input
          type="text"
          value={value.position}
          placeholder="Position Title"
          onChange={(e) => onChange({ position: e.target.value })}
        />
        <label>Main Responsibilities:</label>
        <textarea
          value={value.responsibilities}
          placeholder="Main Responsibilities"
          onChange={(e) => onChange({ responsibilities: e.target.value })}
        ></textarea>
        <label>Start Date:</label>
        <input
          value={value.startDate}
          placeholder="Start Date"
          type="text"
          onChange={(e) => onChange({ startDate: e.target.value })}
        />
        <label>End Date:</label>
        <input
          value={value.endDate}
          placeholder="End Date"
          type="text"
          onChange={(e) => onChange({ endDate: e.target.value })}
        />
      </form>
    </div>
  );
};

export default Experience;
