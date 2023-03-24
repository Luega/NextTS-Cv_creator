import { useState } from 'react';
type education = {
    company: string,
    role: string,
    duration:string,
    description: string
}
export default function Education() {

  const [companyMessage, setCompanyMessage] = useState('');
  const [roleMessage, setRoleMessage] = useState('');
  const [durationMessage, setDurationMessage] = useState('');
  const [descriptionMessage, setDescriptionMessage] = useState('');
  const [education, setEducation] = useState<education[]>([]);

  const handleCompanyChange = (event: any) => {
    setCompanyMessage(event.target.value);
  };
  const handleRoleChange = (event: any) => {
    setRoleMessage(event.target.value);
  };
  const handleDurationChange = (event: any) => {
    setDurationMessage(event.target.value);
  };
  const handleDescriptionChange = (event: any) => {
    setDescriptionMessage(event.target.value);
  };

  const handleBtnClick = () => {
    setEducation([...education, {    company: companyMessage,
        role: roleMessage,
        duration:durationMessage,
        description: descriptionMessage}]);
        setCompanyMessage('');
        setRoleMessage('');
        setDurationMessage('');
        setDescriptionMessage('');
  };



  return (
    <div>
      <div>
        <label htmlFor="company">University or school name</label>
        <input
          onChange={handleCompanyChange}
          type="text"
          id="company"
          placeholder="Company name"
          value={companyMessage}
          required
        />
        <label htmlFor="role">Course</label>
        <input
          onChange={handleRoleChange}
          type="text"
          id="role"
          placeholder="course"
          value={roleMessage}
          required
        />
        <label htmlFor="duration">Duration</label>
        <input
          onChange={handleDurationChange}
          type="text"
          id="duration"
          placeholder="ex. May 2022 - July 2022"
          value={durationMessage}
          required
        />
        <label htmlFor="description">Description</label>
        <textarea
        onChange={handleDescriptionChange}
          name="description"
          id="description"
          placeholder="description...."
          value={descriptionMessage}
        ></textarea>
        <button className="add-skill-button" onClick={() => handleBtnClick()}>
          Add education and training
        </button>
        <div className="d-flex flex-wrap">
          {education.map((edu) => {
            return(
            <div key={edu.role}>
              <p>
                {edu.role} - {edu.company}
              </p>
              
              <p>
                {edu.duration}
              </p>
              <p>
                {edu.description}
              </p>
            </div>)
          })}
        </div>
      </div>
    </div>
  );
}
