import { Input } from "antd";

const FormField = ({ label, type, name, placeholder, required }) => {
  return (
    <div className="form-field-container">
      <label className="stripe-label" htmlFor={name}>
        {label}
      </label>
      <input
        className="stripe-input"
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default FormField;
