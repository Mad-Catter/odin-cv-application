import '../styles/Form.css';
import generatePDF from 'react-to-pdf';
import defaultProfile from '../assets/blank-profile.png';

// Originally I had this written to simply check the buttons own name to decide whether the button should edit or not.  This takes away control from the dom.  However,
// This is much harder to read.
const isButtonEdit = {
  personalEdit: false,
  educationEdit: false,
  experienceEdit: false,
};
function formShift(num) {
  const ul = document.querySelector('ul');
  ul.style.transform = `translatex(${num}rem)`;
}
function handleClick(e, inputs, stateSetters, shiftValue, btnNum) {
  if (!isButtonEdit[btnNum]) {
    for (let i = 0; i < inputs.length; i++) {
      const setState = stateSetters[i];
      const input = inputs[i];
      if (input.type === 'file' && input.value !== '') {
        setState(URL.createObjectURL(input.files[0]));
      } else {
        setState(input.value);
      }
      input.setAttribute('disabled', true);
    }
    e.target.textContent = 'Edit';
    formShift(shiftValue);
  } else {
    for (let i = 0; i < inputs.length; i++) {
      const setState = stateSetters[i];
      const input = inputs[i];
      if (input.type === 'file') {
        setState(defaultProfile);
      } else {
        setState('');
      }

      input.removeAttribute('disabled');
    }
    e.target.textContent = 'Submit';
  }
  isButtonEdit[btnNum] = !isButtonEdit[btnNum];
}

export default function Form({
  setName,
  setEmail,
  setPhone,
  setProfile,
  setSchool,
  setStudy,
  setStudyStart,
  setStudyEnd,
  setCompany,
  setTitle,
  setJobDesc,
  setJobStart,
  setJobEnd,
  targetRef,
}) {
  return (
    <div className="form-container">
      <div className="buttons-container">
        <button type="button" onClick={() => formShift(0)}>
          Personal
        </button>
        <button type="button" onClick={() => formShift(-33.5)}>
          Education
        </button>
        <button type="button" onClick={() => formShift(-67)}>
          Experience
        </button>
      </div>
      <form>
        <ul>
          <li>
            <fieldset className="personal">
              <legend>Personal Info:</legend>
              <div className="input-container">
                <label htmlFor="name">Name:*</label>
                <input type="text" name="email" id="name" required />
              </div>
              <div className="input-container">
                <label htmlFor="email">Email:*</label>
                <input type="email" name="email" id="email" required />
              </div>
              <div className="input-container">
                <label htmlFor="phone">Phone Number:*</label>
                <input type="phone" name="phone" id="phone" required />
              </div>
              <div className="input-container">
                <label htmlFor="profile">Profile Picture:</label>
                <input type="file" name="profile" id="profile" accept=".jpg, .png" />
              </div>
              <button
                type="button"
                className="submit"
                onClick={(e) =>
                  handleClick(
                    e,
                    document.querySelectorAll('.personal input'),
                    [setName, setEmail, setPhone, setProfile],
                    -33.5,
                    0
                  )
                }
              >
                Submit
              </button>
            </fieldset>
          </li>
          <li>
            <fieldset className="education">
              <legend>Education:</legend>
              <div className="input-container">
                <label htmlFor="school">School Name:</label>
                <input type="text" name="school" id="school" />
              </div>
              <div className="input-container">
                <label htmlFor="study">Field of Study:</label>
                <input type="text" name="study" id="study" />
              </div>

              <div className="input-container">
                <label htmlFor="studyStart">Start Date:</label>
                <input type="date" name="studyStart" id="studyStart" />
              </div>
              <div className="input-container">
                <label htmlFor="studyEnd">End Date:</label>
                <input type="date" name="studyEnd" id="studyEnd" />
              </div>
              <button
                type="button"
                className="submit"
                onClick={(e) =>
                  handleClick(
                    e,
                    document.querySelectorAll('.education input'),
                    [setSchool, setStudy, setStudyStart, setStudyEnd],
                    -67,
                    1
                  )
                }
              >
                Submit
              </button>
            </fieldset>
          </li>
          <li>
            <fieldset className="experience">
              <legend>Prior Experience:</legend>
              <div className="input-container">
                <label htmlFor="company">Company Name:</label>
                <input type="text" name="company" id="company" />
              </div>
              <div className="input-container">
                <label htmlFor="title">Position Title:</label>
                <input type="text" name="title" id="title" />
              </div>

              <div className="input-container">
                <label htmlFor="jobStart">Start Date:</label>
                <input type="date" name="jobStart" id="jobStart" />
              </div>
              <div className="input-container">
                <label htmlFor="jobEnd">End Date:</label>
                <input type="date" name="jobEnd" id="jobEnd" />
              </div>

              <div className="input-container">
                <label htmlFor="jobDesc">Job Description:</label>
                <textarea name="jobDesc" id="jobDesc"></textarea>
              </div>
              <button
                type="button"
                className="submit"
                onClick={(e) =>
                  handleClick(
                    e,
                    document.querySelectorAll('.experience input, .experience textarea'),
                    [setCompany, setTitle, setJobStart, setJobEnd, setJobDesc],
                    -67,
                    2
                  )
                }
              >
                Submit
              </button>
            </fieldset>
          </li>
        </ul>
      </form>
      <button
        type="button"
        className="download"
        onClick={() =>
          generatePDF(targetRef, {
            filename: 'CV.pdf',
            page: {
              margin: 0,
              format: 'letter',
              orientation: 'portrait',
            },
          })
        }
      >
        Download PDF
      </button>
    </div>
  );
}
