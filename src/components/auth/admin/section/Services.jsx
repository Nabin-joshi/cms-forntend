import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import {
  getEnglishServiceTextEditorContent,
  getNepaliServiceTextEditorContent,
  saveEnglishServiceTextEditorContent,
  saveNepaliServiceTextEditorContent,
} from "../../../../services/api";
import { ToastContainer, toast } from "react-toastify";

function Services() {
  const editor = useRef(null);
  const [englishContent, setEnglishContent] = useState("");
  const [nepaliContent, setNepaliContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const englishResponse = await getEnglishServiceTextEditorContent();

        const nepaliResponse = await getNepaliServiceTextEditorContent();

        if (englishResponse) {
          setEnglishContent(englishResponse.data.service.content);
        }
        if (nepaliResponse) {
          setNepaliContent(nepaliResponse.data.service.content);
        }
      } catch (error) {}
    };

    fetchData();
  }, []);

  let data = {
    author: "6599a99853629133eee6477d",
    content: "",
  };

  const config = {
    height: 400,
    direction: "ltr",
    language: "en",
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

  const Nepconfig = {
    height: 400,
    direction: "ltr",
    language: "he",
    debugLanguage: false,
    i18n: "he",
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
    if (englishContent) {
      data.content = englishContent;
      let message = await saveEnglishServiceTextEditorContent(data);
      if (message) {
        toast.success("Content Saved Successfully!", {
          position: "top-center",
          autoClose: 700,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "colored",
        });
      } else {
        toast.error("Too Much Content!", {
          position: "top-center",
          autoClose: 700,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "colored",
        });
      }
    }

    if (nepaliContent) {
      data.content = nepaliContent;
      let message = await saveNepaliServiceTextEditorContent(data);
      if (message) {
        toast.success("Content Saved Successfully!", {
          position: "top-center",
          autoClose: 700,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "colored",
        });
      } else {
        toast.error("Too Much Content!", {
          position: "top-center",
          autoClose: 700,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "colored",
        });
      }
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

                  <h5 className="card-title text-center">English Editor</h5>
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
                      value={englishContent}
                      tabIndex={1}
                      config={config}
                      onBlur={(newContent) => setEnglishContent(newContent)}
                    />
                  </div>
                  <br />
                  <br />
                  <br />

                  <h5 className="card-title text-center">Nepali Editor</h5>
                  <hr className="border-2" />
                  <div>
                    <JoditEditor
                      ref={editor}
                      value={nepaliContent}
                      tabIndex={1}
                      config={Nepconfig}
                      onBlur={(newContent) => setNepaliContent(newContent)}
                    />
                  </div>
                  {/* <div>
                    <iframe
                      src="https://www.youtube.com/watch?v=HzQIbfGgvek"
                      frameborder="0"
                    >
                      Video Link
                    </iframe>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ToastContainer />
    </>
  );
}

export default Services;
