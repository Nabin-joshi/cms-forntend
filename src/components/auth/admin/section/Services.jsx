import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { saveContent } from "../../../../services/api";

function Services() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  let data = {
    author: "65999deb6b12774f3c5903ec",
    content: "",
    title: "Random Title 1",
    photo:
      "http://localhost:5000/public/images/1704648343985-65999deb6b12774f3c5903ec1738.png",
  };

  const config = {
    height: 400,
    direction: "ltr",
    language: "en he ar",
    debugLanguage: false,
    i18n: "en",
    tabIndex: -1,
    toolbar: true,
    events: {},
    uploader: {
      insertImageAsBase64URI: true,
    },
    placeholder: "You Can Create your View Here ...",
    statusbar: false,
  };

  const saveService = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(content);
    if (content) {
      data.content = content;
      await saveContent(data);
    }
  };

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Services</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Auth</a>
              </li>
              <li className="breadcrumb-item">Components</li>
              <li className="breadcrumb-item active">services</li>
            </ol>
          </nav>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Services Rich Text Editor</h5>
                  <hr className="border-2" />

                  <div
                    style={{ marginRight: "10px" }}
                    className="d-flex justify-content-end mr-5"
                  >
                    <i
                      onClick={(e) => saveService(e)}
                      style={{ cursor: "pointer" }}
                      className="bi bi-floppy fa-lg mb-2"
                    ></i>
                  </div>

                  <div>
                    <JoditEditor
                      ref={editor}
                      value={content}
                      tabIndex={1}
                      config={config}
                      onBlur={(newContent) => setContent(newContent)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Services;
