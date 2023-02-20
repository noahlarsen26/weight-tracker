function EnterWeightBtn({ btnClassName, input, type, divClassName, onClick }) {
  return (
    <div className={divClassName}>
      <button onClick={onClick} className={btnClassName} type={type}>
        {input}
      </button>
    </div>
  );
}

export default EnterWeightBtn;
