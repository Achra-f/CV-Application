import React from 'react';

const EducationForm = ({ onChange }) => {
  return (
    <div className="form-section">
      <h2>Educational Experience</h2>
      <form>
        <label>School Name:</label>
        <input type="text" onChange={(e) => onChange({ school: e.target.value })} />
        <label>Title of Study:</label>
        <input type="text" onChange={(e) => onChange({ study: e.target.value })} />
        <label>Date of Study:</label>
        <input type="text" onChange={(e) => onChange({ studyDate: e.target.value })} />
      </form>
    </div>
  );
};

export default EducationForm;
