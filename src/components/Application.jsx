import '../styles/Application.css';
// import profile from '../assets/blank-profile.png';

export default function Application({
  name,
  email,
  phone,
  profile,
  school,
  study,
  studyStart,
  studyEnd,
  company,
  title,
  jobDesc,
  jobStart,
  jobEnd,
}) {
  return (
    <div className="application-container">
      <div className="application">
        <aside className="left-banner">
          <img src={profile} alt="blank profile pic" />
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
        </aside>
        <div className="content">
          <section>
            <h2>Education:</h2>
            <p>School: {school}</p>
            <p>Field of Study: {study}</p>
            <p>
              Dates Attended: {studyStart} {studyStart && studyEnd ? '-' : ''} {studyEnd}
            </p>
          </section>
          <section>
            <h2>Prior Experience:</h2>
            <p>Company: {company}</p>
            <p>Position Title: {title}</p>
            <p>
              Dates Employed: {jobStart} {jobStart && jobEnd ? '-' : ''} {jobEnd}
            </p>
            <p>Job Description: {jobDesc}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
