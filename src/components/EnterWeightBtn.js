function EnterWeightBtn({ onClick, divClassName, btnClassName, input, type }) {
  return (
    <div className={divClassName}>
      <button onClick={onClick} className={btnClassName} type={type}>
        {input}
      </button>
    </div>
  );
}

export default EnterWeightBtn;
