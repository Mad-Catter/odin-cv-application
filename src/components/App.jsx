import Form from './Form.jsx';
import Application from './Application.jsx';
import { useState } from 'react';
export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  // school
  const [school, setSchool] = useState();
  const [study, setStudy] = useState();
  const [studyStart, setStudyStart] = useState();
  const [studyEnd, setStudyEnd] = useState();
  // practical
  const [company, setCompany] = useState();
  const [title, setTitle] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobStart, setJobStart] = useState();
  const [jobEnd, setJobEnd] = useState();
  return (
    <>
      <Form
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        setSchool={setSchool}
        setStudy={setStudy}
        setStudyStart={setStudyStart}
        setStudyEnd={setStudyEnd}
        setCompany={setCompany}
        setTitle={setTitle}
        setJobDesc={setJobDesc}
        setJobStart={setJobStart}
        setJobEnd={setJobEnd}
      />
      <Application
        name={name}
        email={email}
        phone={phone}
        school={school}
        study={study}
        studyStart={studyStart}
        studyEnd={studyEnd}
        company={company}
        title={title}
        jobDesc={jobDesc}
        jobStart={jobStart}
        jobEnd={jobEnd}
      />
    </>
  );
}
