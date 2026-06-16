import '../styles/Application.css';

export default function Application({ name, email, phone }) {
  return (
    <div className="application-container">
      <div className="application">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  );
}
