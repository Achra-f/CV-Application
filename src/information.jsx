import React from "react";

const InformationForm = ({ onChange }) => {
  return (
    <div className="form-section">
      <h2>General Information</h2>
      <form>
        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => onChange({ name: e.target.value })}
        />
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => onChange({ email: e.target.value })}
        />
        <label>Phone Number:</label>
        <input
          type="tel"
          onChange={(e) => onChange({ phone: e.target.value })}
        />
      </form>
    </div>
  );
};

export default InformationForm;
