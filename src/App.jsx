import React, { useState } from "react";
import Information from "./information";
import Education from "./education";
import Experience from "./experience";

const App = () => {
  const [information, setInformation] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  });
  const [education, setEducation] = useState({
    school: "Example University",
    study: "Computer Science",
    studyDate: "2015-2019",
  });
  const [experience, setExperience] = useState({
    company: "Tech Co.",
    position: "Software engineer",
    responsibilities: "Developed and maintained web applications.",
    startDate: "2019-06-01",
    endDate: "2021-12-31",
  });

  return (
    <>
      <h1 className="flex justify-center text-3xl font-bold text-center">
        CV Builder
      </h1>
      <div className="flex">
        <div className="flex-1 p-4 bg-slate300">
          <Information
            value={information}
            onChange={(data) =>
              setInformation((prevData) => ({ ...prevData, ...data }))
            }
          />
          <Education
            value={education}
            onChange={(data) =>
              setEducation((prevData) => ({ ...prevData, ...data }))
            }
          />
          <Experience
            value={experience}
            onChange={(data) =>
              setExperience((prevData) => ({ ...prevData, ...data }))
            }
          />
        </div>

        <div className="flex-1 p-4 bg-gray-200">
          <h2 className="text-lg font-semibold mb-4">Preview:</h2>
          <div className="mb-2">
            <strong className="text-blue-700">General Information:</strong>{" "}
            {information.name}, {information.email}, {information.phone}
          </div>
          <div className="mb-2">
            <strong className="text-blue-700">Educational Experience:</strong>{" "}
            {education.school}, {education.study}, {education.studyDate}
          </div>
          <div>
            <strong className="text-blue-700">Practical Experience:</strong>{" "}
            {experience.company}, {experience.position}, {experience.responsibilities}, {experience.startDate}{" "}
            - {experience.endDate}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
