function EnterWeightBtn(props) {
  return (
    <div className={props.divClassName}>
      <button
        onClick={props.onClick}
        className={props.btnClassName}
        type={props.type}
      >
        {props.input}
      </button>
    </div>
  );
}

export default EnterWeightBtn;
