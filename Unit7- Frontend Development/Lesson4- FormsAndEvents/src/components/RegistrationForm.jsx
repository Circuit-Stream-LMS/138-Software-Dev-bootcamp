import { useState, useEffect } from "react";
import FormInput from "./FromInput";


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // hey, keep the existing fields, only change what changed as 
  };

  // Validate form fields
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    // i want to check if the length of keys in my object is 0 
    // Object.keys gives you all the keys of the object you are using 
    // Object.keys(validationErrors) = [].length = 0 {}
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
    }
  };

  // Side effect after form submission
  useEffect(() => {
    if (isSubmitted) {
      console.log("Form submitted successfully:", formData);
      alert("Registration Successful!");
    }
  }, [isSubmitted]);

  return (
    <div className="form-container">
      <h2 className="form-title">Register Form Controlled</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        {/* Dropdown for Role Selection */}
        <div className="input-group" >
          <label className="label">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="select-field"
            autoComplete="off"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" className="submit-btn" >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
