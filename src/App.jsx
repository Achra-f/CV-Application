import React, { useState } from 'react';
import Information from './information';
import Education from './education';
import Experience from './experience';

const App = () => {
  const [information, setInformation] = useState({ name: '', email: '', phone: '' });
  const [education, setEducation] = useState({
    school: '',
    study: '',
    studyDate: '',
  });
  const [experience, setExperience] = useState({
    company: '',
    position: '',
    responsibilities: '',
    startDate: '',
    endDate: '',
  });

  return (
    <div className="App">
      <Information onChange={(data) => setInformation((prevData) => ({ ...prevData, ...data }))} />
      <Education
        onChange={(data) => setEducation((prevData) => ({ ...prevData, ...data }))}
      />
      <Experience
        onChange={(data) => setExperience((prevData) => ({ ...prevData, ...data }))}
      />

      <div className="preview">
        <h2>Preview:</h2>
        <div>
          <strong>General Information:</strong> {JSON.stringify(information)}
        </div>
        <div>
          <strong>Educational Experience:</strong> {JSON.stringify(education)}
        </div>
        <div>
          <strong>Practical Experience:</strong> {JSON.stringify(experience)}
        </div>
      </div>
    </div>
  );
};

export default App;
