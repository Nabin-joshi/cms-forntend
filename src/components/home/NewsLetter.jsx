import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { toastPosition } from "../../config/toastProp";
import { toastError } from "../../services/ToastService";
import { createNewsLetterUser } from "../../services/NewsLetterUserService";

function NewsLetter() {
  const emailRef = useRef("");
  const [loading, setLoading] = useState(false);
  const subscribeUser = async () => {
    setLoading(true);
    const userData = {};
    const email = emailRef.current.value;
    if (email.trim().length < 1) {
      toast.error(`email is required !`, toastPosition);
      setLoading(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error(`invalid email !`, toastPosition);
      setLoading(false);
      return;
    }

    userData["email"] = email;
    userData["name"] = "testuser";
    try {
      const savedRes = await createNewsLetterUser(userData);
      if (savedRes !== undefined) {
        emailRef.current.value = "";
        toast.success("suscribed !!", toastPosition);
      }
    } catch (error) {
      toast.error(`${error.response.data.errormessage}`, toastPosition);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="subscribe-section mt-5">
        <div className="subscribe-container border position-relative">
          <h2 className="text-white text-center">
            Stay Updated on our latest news!
          </h2>
          <div className="subscribe-form d-flex justify-content-center flex-wrap mt-5">
            <input
              ref={emailRef}
              type="email"
              className="subscribe-input mb-3"
              placeholder="Enter your email"
            />
            <button
              className="btn btn-blue-inverted ml-2 mb-3"
              onClick={subscribeUser}
              disabled={loading}
            >
              <i className="fas fa-envelope mr-2"></i>Subscribe{" "}
            </button>
          </div>
        </div>
      </section>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default NewsLetter;
