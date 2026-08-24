const FormInput = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className="input-group">
      <label className="label">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="input-field"
        autoComplete="off"
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default FormInput;
