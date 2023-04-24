import FormInput from "./FormInput";

function Form({ inputs, onChange, onSubmit }) {
  return (
    <form className="form profile-details" onSubmit={onSubmit}>
      <div className="form-container">
        <div className="input-container">
          {inputs.map((input) => (
            <FormInput
              htmlFor={input.htmlFor}
              onChange={onChange}
              type={input.type}
              id={input.id}
              key={input.id}
            >
              {input.label}
            </FormInput>
          ))}
          <button type="submit" className="btn">
            submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
