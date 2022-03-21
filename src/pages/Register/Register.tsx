import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import backgroundImage from "../../assets/images/bg-signin.png"
import { UserService } from "../../Services/userServices";
import "./register.scss";

interface Register {
  password: string, 
  firstName: string,
  lastName: string,
  confirmPassword: string,
  mobile: string,
  email: string,
}

const Register = () => {

  const dispatch = useDispatch();

  const [values, setValues] = useState({
    firstName: "", lastName: "", email: "", password: "", confirmPassword: "", mobile: ""
  });
  const [errors, setErrors] = useState({
    email: "", password: "", confirmPassword: "", mobile: ""
  });


  const Validate = (values: Register) => {
    let errors = { email: "", password: "", confirmPassword: "", mobile: "" };
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "password must be longer than or equal to 8 characters";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm password is required"
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Those passwords didn’t match. Try again."
    }
    if (!values.mobile) {
      errors.mobile = "Phone number is required";
    } else if (/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(values.mobile)) {
      errors.mobile = "Phone number is invalid";
    }
    return errors;
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setErrors(Validate(values));
    const formData = new FormData(e.target);
    const data = JSON.stringify(Object.fromEntries(formData));
    console.log("data", data);
    dispatch(UserService.register(data));

  }, []
  );
  const handleChange = (event: any) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }))
  }

  return (
    <div className="login-bg" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="register-form">
        <h1 className="login-form-title">Welcome to Mylife365 admin portal</h1>

        <form onSubmit={handleSubmit}>
          <label className="login-form-name">Email</label>
          <input
            type="email"
            name="email"
            value={values.email || ""}
            onChange={handleChange}
          />
          {
            errors.email && (
              <p className="text-danger">{errors.email}</p>
            )
          }
          <div className="row">
            <div className="col-6">
              <label className="login-form-name">First Name</label>
              <input
                type="text"
                name="firstName"
                value={values.firstName || ""}
                onChange={handleChange}
              />
              {
                errors.email && (
                  <p className="text-danger">{errors.email}</p>
                )
              }
            </div>
            <div className="col-6">
              <label className="login-form-name">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={values.lastName || ""}
                onChange={handleChange}
              />
              {
                errors.email && (
                  <p className="text-danger">{errors.email}</p>
                )
              }
            </div>
          </div>

          <label className="login-form-name">Password</label>
          <input
            type="password"
            name="password"
            value={values.password || ""}
            onChange={handleChange}
          />
          {
            errors.password && (
              <p className="text-danger">{errors.password}</p>
            )
          }
          <label className="login-form-name">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={values.confirmPassword || ""}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="text-danger">{errors.confirmPassword}</p>
          )}
          <label className="login-form-name">Mobile</label>
          <input
            type="number"
            name="mobile"
            value={values.mobile || ""}
            onChange={handleChange}
          />
          {errors.mobile && (
            <p className="text-danger">{errors.mobile}</p>
          )}

          <button type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
