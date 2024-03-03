import React from "react";

function NewsLetter() {
  return (
    <>
      <section className="subscribe-section mt-5">
        <div className="subscribe-container border position-relative">
          <h2 className="text-white text-center">
            Stay Updated on our latest news!
          </h2>
          <div className="subscribe-form d-flex justify-content-center flex-wrap mt-5">
            <input
              type="email"
              className="subscribe-input mb-3"
              placeholder="Enter your email"
            />
            <button className="btn btn-blue-inverted ml-2 mb-3">
              <i className="fas fa-envelope mr-2"></i>Subscribe{" "}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsLetter;
