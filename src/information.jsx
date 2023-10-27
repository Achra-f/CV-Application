import React from "react";

const InformationForm = ({ value, onChange }) => {
  return (
    <div className="flex flex-col">
      <h2 className="flex justify-center">Personal Information</h2>
      <form className="flex flex-col">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Name"
          value={value.name}
          onChange={(e) => onChange({ name: e.target.value })}
        />
        <label>Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={value.email}
          onChange={(e) => onChange({ email: e.target.value })}
        />
        <label>Phone Number:</label>
        <input
          type="tel"
          placeholder="Phone Number"
          value={value.phone}
          onChange={(e) => onChange({ phone: e.target.value })}
        />
        <label>Address:</label>
        <input
          type="text"
          placeholder="Address"
          value={value.address}
          onChange={(e) => onChange({ address: e.target.value })}
        />
      </form>
    </div>
  );
};

export default InformationForm;
