// ButtonComponent receives props from its parent
const Button = ({ onClickHandler, label, disabled }) => {
  return (
    <button onClick={onClickHandler} disabled={disabled} className="button">
      {label}
    </button>
  );
};

export default Button;
