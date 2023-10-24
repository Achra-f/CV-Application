import React from "react";

const EducationForm = ({ value, onChange }) => {
  return (
    <div className="flex flex-col">
      <h2 className="flex justify-center">Educational Experience</h2>
      <form className="flex flex-col">
        <label>School Name:</label>
        <input
          type="text"
          value={value.school}
          placeholder="School Name"
          onChange={(e) => onChange({ school: e.target.value })}
        />
        <label>Title of Study:</label>
        <input
          type="text"
          placeholder="Title of Study"
          value={value.study}
          onChange={(e) => onChange({ study: e.target.value })}
        />
        <label>Date of Study:</label>
        <input
          placeholder="Date of Study"
          type="text"
          value={value.studyDate}
          onChange={(e) => onChange({ studyDate: e.target.value })}
        />
      </form>
    </div>
  );
};

export default EducationForm;
