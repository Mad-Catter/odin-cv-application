export default function Input({ stateFunction, id, value, placeholder, type = 'text', required = 'false' }) {
  return (
    <input
      type={type}
      id={id}
      onChange={stateFunction}
      value={value}
      placeholder={placeholder}
      required={required}
    ></input>
  );
}
