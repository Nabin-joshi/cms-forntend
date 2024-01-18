import React, { useState } from "react";
import Logo from "../../../assets/img/logo.png";
import TextInput from "../../shared/TextInput/TextInput";
import loginSchema from "../../../schemas/loginSchema";
import styles from "./Login.module.css";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../../../services/api";
import { setUser } from "../../../store/userSlice";

const divStyle = {
  boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.5)",
  minHeight: "440px",
};

export default function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const handleLogin = async () => {
    const data = {
      email: values.email,
      password: values.password,
    };

    const response = await login(data);

    if (response.status === 200) {
      // 1. setUser
      const user = {
        _id: response.data.user._id,
        email: response.data.user.email,
        username: response.data.user.username,
        auth: response.data.auth,
      };

      dispatch(setUser(user));
      // 2. redirect -> homepage
      navigate("/");
    } else if (response.code === "ERR_BAD_REQUEST") {
      // display error message
      setError(response.response.data.message);
    }
  };

  const { values, touched, handleBlur, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: loginSchema,
  });

  return (
    <>
      <div className="container ">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container" style={divStyle}>
            <div className="row justify-content-center login-body">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="banner">
                  <h2>Welcome to CMS APP</h2>
                  <p>...</p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center"
                style={{ marginBottom: "30px" }}
              >
                <div className="d-flex justify-content-center py-4">
                  <NavLink className="logoIkhata d-flex align-items-center navLink w-auto">
                    <img src={Logo} alt="" />
                    <span className="d-none d-lg-block">IsHani Technology</span>
                  </NavLink>
                </div>

                <div className="cardIkhata mb-3">
                  <div className="cardIkhata-body">
                    <div className="pt-4 pb-2">
                      <h5 className="cardIkhata-title text-center pb-0 fs-4">
                        Login to Your Account
                      </h5>
                      <p className="text-center small">
                        Enter your username & password to login
                      </p>
                    </div>

                    <form
                      id="authenticate"
                      className="row g-3 needs-validation"
                      onSubmit={(e) => {
                        e.preventDefault(); // Prevent default form submission
                        handleLogin();
                      }}
                    >
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">
                          Username
                        </label>

                        <TextInput
                          type="text"
                          value={values.email}
                          name="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="email"
                          error={errors.email && touched.email ? 1 : undefined}
                          errormessage={errors.email}
                        />
                      </div>

                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">
                          Password
                        </label>
                        <TextInput
                          type="password"
                          name="password"
                          value={values.password}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="password"
                          error={
                            errors.password && touched.password ? 1 : undefined
                          }
                          errormessage={errors.password}
                        />
                      </div>

                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100"
                          type="submit"
                          disabled={
                            !values.email ||
                            !values.password ||
                            errors.email ||
                            errors.password
                          }
                        >
                          Login
                        </button>
                      </div>
                      {error !== "" ? (
                        <p className={styles.errorMessage}>{error}</p>
                      ) : (
                        ""
                      )}
                      <div className="col-12">
                        <a
                          className="small mb-0"
                          href="/"
                          style={{ cursor: "pointer" }}
                        >
                          Forgot Password ?{" "}
                        </a>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">
                          Don't have account?
                          <a
                            href="/"
                            style={{
                              cursor: "pointer",
                              color: "rgb(15, 122, 155)",
                            }}
                          >
                            Register an account
                          </a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="credits" style={{ marginTop: "10px" }}>
            Developed by <a href="https://ishanitech.com/">Ishani Technology</a>
          </div>
        </section>
      </div>
    </>
  );
}
