import React, { useState } from "react";
import Information from "./information";
import Education from "./education";
import Experience from "./experience";

const App = () => {
  const [information, setInformation] = useState({
    name: "Jimmy McGill",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "London, UK",
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

        <div className="flex-1 p-4 bg-grayBlue text-white">
          <div className="mb-2 flex flex-col items-center justify-center gap-4">
            <div className="text-4xl font-bold">{information.name}</div>
            <div className="flex gap-4 text-[#5ce1e6] font-semibold text-md">
              <div className="flex justify-center items-center gap-2">
                <i class="fa-solid fa-envelope"></i>
                <div>{information.email}</div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <i class="fa-solid fa-phone"></i> <div>{information.phone}</div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <i class="fa-solid fa-location-dot"></i>
                <div>{information.address}</div>
              </div>
            </div>
          </div>
          <div className="mb-2">
            <div className="flex text-2xl font-semibold bg-slate300 text-[#1e1c27] justify-center items-center rounded-md">
              Education
            </div>
            <div className="flex justify-evenly items-center">
              <div>
                <div>{education.studyDate}</div>
              </div>
              <div>
                <div>{education.school}</div>
                <div> {education.study} </div>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="flex text-2xl font-semibold bg-slate300 text-[#1e1c27] justify-center items-center rounded-md">Experience</div>
            {experience.company}, {experience.position},{" "}
            {experience.responsibilities}, {experience.startDate} -{" "}
            {experience.endDate}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
