import Form from './Form.jsx';
import Application from './Application.jsx';
import { useState } from 'react';
import { useRef } from 'react';

import defaultProfile from '../assets/blank-profile.png';

export default function App() {
  // personal
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [profile, setProfile] = useState(defaultProfile);
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

  const targetRef = useRef();
  return (
    <main>
      <Form
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        setProfile={setProfile}
        setSchool={setSchool}
        setStudy={setStudy}
        setStudyStart={setStudyStart}
        setStudyEnd={setStudyEnd}
        setCompany={setCompany}
        setTitle={setTitle}
        setJobDesc={setJobDesc}
        setJobStart={setJobStart}
        setJobEnd={setJobEnd}
        targetRef={targetRef}
      />
      <Application
        name={name}
        email={email}
        phone={phone}
        profile={profile}
        school={school}
        study={study}
        studyStart={studyStart}
        studyEnd={studyEnd}
        company={company}
        title={title}
        jobDesc={jobDesc}
        jobStart={jobStart}
        jobEnd={jobEnd}
        targetRef={targetRef}
      />
    </main>
  );
}
