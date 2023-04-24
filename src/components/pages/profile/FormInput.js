function FormInput({ label, children, value, onChange, type, name, id }) {
  return (
    <div>
      <label label={label}>{children}</label>
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
