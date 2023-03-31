function FormInput({ htmlFor, children, value, onChange, type, name, id }) {
  return (
    <div>
      <label htmlFor={htmlFor}>{children}</label>
      <input
        required
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        id={id}
      />
    </div>
  );
}

export default FormInput;
