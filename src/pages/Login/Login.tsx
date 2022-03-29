import React, { useCallback, useState } from "react";
import "./login.scss";
import backgroundImage from "../../assets/images/bg-signin.png";
import { useDispatch } from "react-redux";
import { SignInAction } from "../../Store/actions/userActions";
import { useNavigate } from "react-router-dom"

interface ILogin {
  email: string;
  password: string;
}

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: "", password: "",
  });
  const [errors, setErrors] = useState({
    email: "", password: "",
  });


  const Validate = (values: ILogin) => {
    let errors = { email: "", password: "" };
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length <= 7) {
      errors.password = "password must be longer than or equal to 8 characters"
    }
    return errors;
  }

  const goToHome = () => {
    navigate("/home");
  }

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setErrors(Validate(values));
      const formData = new FormData(e.target);
      const data = JSON.stringify(Object.fromEntries(formData));
      dispatch(SignInAction(data, goToHome()));
    }, [dispatch, setErrors]
  );
  const handleChange = (event: any) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }))
  }

  return (
    <div className="login-bg" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="login-form">
        <h1 className="login-form-title">Welcome to My Life 365 admin portal</h1>

        <form onSubmit={handleSubmit}>
          <label>Username</label>
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
          <label className="login-form-password">Password</label>
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
          <button type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
