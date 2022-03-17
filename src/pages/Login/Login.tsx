import React, { useCallback, useState } from "react";
import * as Yup from "yup";
import "./login.scss";
import backgroundImage from "../../assets/images/bg-signin.png"
import { Formik, FormikHelpers, useFormik } from "formik";
import { LoginService } from "../../Services/Api/LoginServices";
import { DOMAIN_MY_LIFE, TOKEN_MY_LIFE } from "../../Utils/systemSetting";

interface Values {
  username: string,
  password: string
}

const Login = () => {

  const [values, setValues] = useState({
    email: "", password: "",
  });
  const [errors, setErrors] = useState({
    email: "", password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);


  const Validate = (values: any) => {
    let errors = { email: "", password: "" };
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
    return errors;
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setErrors(Validate(values));
    const formData = new FormData(e.target);
    const data = JSON.stringify(Object.fromEntries(formData));
    LoginService.login(data);
    console.log("data", data);

  }
  const handleChange = (event: any) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }))
  }

  return (
    <div className="login-bg" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="login-form">
        <h1 className="login-form-title">Welcome to Mylife365 admin portal</h1>

        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {
            errors.email && (
              <p className="text-danger">{errors.email}</p>
            )
          }
          <label className="login-form-password">Password</label>
          <input
            type="password"
            name="password"
            value={values.password || ""}
            onChange={handleChange}
          />

          <button type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
