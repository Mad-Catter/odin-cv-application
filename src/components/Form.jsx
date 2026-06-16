import '../styles/Form.css';
// TODO: Change this from magic number bs to something that scales if possible.
// Maybe add arrow buttons to the bottom of the ul
function jankChange(num) {
  const ul = document.querySelector('ul');
  ul.style.transform = `translatex(${num}rem)`;
}
export default function Form({
  setName,
  setEmail,
  setPhone,
  setSchool,
  setStudy,
  setStudyStart,
  setStudyEnd,
  setCompany,
  setTitle,
  setJobDesc,
  setJobStart,
  setJobEnd,
}) {
  // Name here (names separate?)
  // Email and phone on the same line
  // School (name. study, times of study)
  // Practical expirence related to job (company name, position, desc of job, time of job)
  return (
    <div className="form-wrapper">
      <div className="buttons-container">
        <button type="button" onClick={() => jankChange(0)}>
          Personal
        </button>
        <button type="button" onClick={() => jankChange(-33.5)}>
          Education
        </button>
        <button type="button" onClick={() => jankChange(-67)}>
          Experience
        </button>
      </div>
      <form>
        <ul>
          <li>
            <fieldset>
              <legend>Personal Info:</legend>
              <div className="input-container">
                <label htmlFor="name">Name:*</label>
                <input type="text" name="email" id="name" onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="input-container">
                <label htmlFor="email">Email:*</label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="input-container">
                <label htmlFor="phone">Phone Number:*</label>
                <input type="phone" name="phone" id="phone" onChange={(e) => setPhone(e.target.value)} required />
              </div>
            </fieldset>
          </li>
          <li>
            <fieldset>
              <legend>Education:</legend>
              <div className="input-container">
                <label htmlFor="school">School Name:</label>
                <input type="text" name="school" id="school" onChange={(e) => setSchool(e.target.value)} />
              </div>
              <div className="input-container">
                <label htmlFor="study">Field of Study:</label>
                <input type="text" name="study" id="study" onChange={(e) => setStudy(e.target.value)} />
              </div>

              <div className="input-container">
                <label htmlFor="studyStart">Start Date:</label>
                <input type="date" name="studyStart" id="studyStart" onChange={(e) => setStudyStart(e.target.value)} />
              </div>
              <div className="input-container">
                <label htmlFor="studyEnd">End Date:</label>
                <input type="date" name="studyEnd" id="studyEnd" onChange={(e) => setStudyEnd(e.target.value)} />
              </div>
            </fieldset>
          </li>
          <li>
            <fieldset>
              <legend>Prior Experience:</legend>
              <div className="input-container">
                <label htmlFor="company">Company Name:</label>
                <input type="text" name="company" id="company" onChange={(e) => setCompany(e.target.value)} />
              </div>
              <div className="input-container">
                <label htmlFor="title">Position Title:</label>
                <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} />
              </div>

              <div className="input-container">
                <label htmlFor="jobStart">Start Date:</label>
                <input type="date" name="jobStart" id="jobStart" onChange={(e) => setJobStart(e.target.value)} />
              </div>
              <div className="input-container">
                <label htmlFor="jobEnd">End Date:</label>
                <input type="date" name="jobEnd" id="jobEnd" onChange={(e) => setJobEnd(e.target.value)} />
              </div>

              <div className="input-container">
                <label htmlFor="jobDesc">Job Description:</label>
                <textarea name="jobDesc" id="jobDesc" onChange={(e) => setJobDesc(e.target.value)}></textarea>
              </div>
            </fieldset>
          </li>
        </ul>
      </form>
    </div>
  );
}
