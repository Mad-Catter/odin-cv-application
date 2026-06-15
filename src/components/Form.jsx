export default function Form({ setName, setEmail, setPhone }) {
  // Name here (names separate?)
  // Email and phone on the same line
  // School (name. study, times of study)
  // Practical expirence related to job (company name, position, desc of job, time of job)
  return (
    <form>
      <label htmlFor="name">Name:*</label>
      <input type="text" name="email" id="name" onChange={(e) => setName(e.target.value)} />
      <div className="email-phone">
        <label htmlFor="email">Email:*</label>
        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="phone">Phone Number:*</label>
        <input type="phone" name="phone" id="phone" onChange={(e) => setPhone(e.target.value)} />
      </div>
    </form>
  );
}
