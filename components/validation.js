// components/RegisterForm.js
import { useState } from 'react';

const RegisterForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    surname: '',
    email: '',
    age: '',
    birthday: '',
    course: 'photoshop',
    reason: '',
  });
  const [errors, setErrors] = useState({});
  const [toastVisible, setToastVisible] = useState(false);

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let isValid = true;

    if (!formValues.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }
    if (!formValues.surname.trim()) {
      errors.surname = 'Surname is required';
      isValid = false;
    }
    if (!emailRegex.test(formValues.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }
    if (!formValues.age || formValues.age <= 0) {
      errors.age = 'Please enter a valid age';
      isValid = false;
    }
    if (!formValues.birthday) {
      errors.birthday = 'Please enter your birthday';
      isValid = false;
    }
    if (!formValues.reason.trim()) {
      errors.reason = 'Please enter a reason';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      setToastVisible(true);
      setTimeout(() => {
        setToastVisible(false);
        // Submit the form data to the server or API
      }, 4000);
    }
  };

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">შეიყვანეთ სახელი</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="სახელი"
            value={formValues.name}
            onChange={handleChange}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>
        {/* Repeat similar blocks for other fields */}
        <button type="submit">გაგზავნა</button>
      </form>
      {toastVisible && <div id="toast" className="toast">რეგისტრაცია წარმატებით გაიგზავნა!</div>}
    </>
  );
};

export default RegisterForm;
