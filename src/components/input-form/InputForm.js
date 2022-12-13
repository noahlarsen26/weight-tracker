import Form from "./Form";

function InputForm(props) {
  return (
    <section className="input-form">
      <Form onClick={props.onClick} />
    </section>
  );
}

export default InputForm;
