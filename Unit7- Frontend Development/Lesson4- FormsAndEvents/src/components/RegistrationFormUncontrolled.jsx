import { useRef, useState, useEffect } from "react";

const RegistrationFormUncontrolled = () => {
  // Refs to directly access input DOM nodes
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const roleRef = useRef(null);

  // Local states for errors and submission
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validate form fields by reading values directly from refs
  const validateForm = (data) => {
    let newErrors = {};
    if (!data.name.trim()) newErrors.name = "Name is required";
    if (!data.email.includes("@")) newErrors.email = "Invalid email";
    if (data.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Gather form values from refs
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      role: roleRef.current.value,
    };

    // Validate values
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // If no errors, mark as submitted
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      console.log("Form submitted successfully:", formData);
    }
  };

  // Run side effect after successful submission
  useEffect(() => {
    if (isSubmitted) {
      alert("Registration Successful!");
    }
  }, [isSubmitted]);

  return (
    <div className="form-container">
      <h2 className="form-title">Register Form Uncontrolled</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="input-group">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            ref={nameRef} // Ref attached instead of value/onChange
            className="input-field"
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        {/* Email Input */}
        <div className="input-group">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            ref={emailRef}
            className="input-field"
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        {/* Password Input */}
        <div className="input-group">
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            ref={passwordRef}
            className="input-field"
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        {/* Dropdown for Role Selection */}
        <div className="input-group">
          <label className="label">Role</label>
          <select
            name="role"
            ref={roleRef}
            defaultValue="user" // use defaultValue instead of state
            className="select-field"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationFormUncontrolled;
