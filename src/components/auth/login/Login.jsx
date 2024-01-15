import React from "react";
import Logo from "../../../assets/img/logo.png";
const divStyle = {
  boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.5)",
  minHeight: "440px",
};

export default function Login() {
  return (
    <>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container" style={divStyle}>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="banner">
                  <h2>Welcome to CMS APP</h2>
                  <p>Discover Effortless Accounting with Our Online App</p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center"
                style={{ marginBottom: "30px" }}
              >
                <div className="d-flex justify-content-center py-4">
                  <a
                    href="index.html"
                    className="logo d-flex align-items-center w-auto"
                  >
                    <img src={Logo} alt="" />
                    <span className="d-none d-lg-block">IKhata</span>
                  </a>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">
                        Login to Your Account
                      </h5>
                      <p className="text-center small">
                        Enter your username & password to login
                      </p>
                    </div>

                    <form
                      id="authenticate"
                      className="row g-3 needs-validation"
                    >
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">
                          Username
                        </label>

                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          required
                        />
                      </div>

                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          required
                        />
                      </div>

                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">
                          Login
                        </button>
                      </div>
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
