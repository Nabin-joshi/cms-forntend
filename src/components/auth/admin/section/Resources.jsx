// Resources.jsx
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@mui/material";
import JoditEditor from "jodit-react";

import { ToastContainer, toast } from "react-toastify";
import {
  getResourcesData,
  updateResourcesField,
} from "../../../../services/resourcesService";

const Resources = () => {
  const mediaRef = useRef();
  const mediaNepaliRef = useRef();
  const newsAndPressReleaseRef = useRef();
  const newsAndPressReleaseNepaliRef = useRef();
  const eventsRef = useRef();
  const eventsNepaliRef = useRef();
  const digitalLibraryRef = useRef();
  const digitalLibraryNepaliRef = useRef();
  const transformingLivesRef = useRef();
  const transformingLivesNepaliRef = useRef();
  const blogRef = useRef();
  const blogNepaliRef = useRef();

  const [media, setMedia] = useState("");
  const [mediaNepali, setMediaNepali] = useState("");
  const [newsAndPressRelease, setNewsAndPressRelease] = useState("");
  const [newsAndPressReleaseNepali, setNewsAndPressReleaseNepali] =
    useState("");
  const [events, setEvents] = useState("");
  const [eventsNepali, setEventsNepali] = useState("");
  const [digitalLibrary, setDigitalLibrary] = useState("");
  const [digitalLibraryNepali, setDigitalLibraryNepali] = useState("");
  const [transformingLives, setTransformingLives] = useState("");
  const [transformingLivesNepali, setTransformingLivesNepali] = useState("");
  const [blog, setBlog] = useState("");
  const [blogNepali, setBlogNepali] = useState("");

  const stateDatas = {
    media: setMedia,
    mediaNepali: setMediaNepali,
    newsAndPressRelease: setNewsAndPressRelease,
    events: setEvents,
    eventsNepali: setEventsNepali,
    digitalLibrary: setDigitalLibrary,
    digitalLibraryNepali: setDigitalLibraryNepali,
    transformingLives: setTransformingLives,
    transformingLivesNepali: setTransformingLivesNepali,
    blog: setBlog,
    blogNepali: setBlogNepali,
  };
  const updateFieldMedia = () => {
    const fields = {
      media: mediaRef.current.value,
      mediaNepali: mediaNepaliRef.current.value,
    };
    updateFieldsOfResources(fields);
  };
  const updateFieldNewsAndPressRelease = () => {
    const fields = {
      newsAndPressRelease: newsAndPressReleaseRef.current.value,
      newsAndPressReleaseNepali: newsAndPressReleaseNepaliRef.current.value,
    };
    updateFieldsOfResources(fields);
  };

  const updateFieldEvents = () => {
    const fields = {
      events: eventsRef.current.value,
      eventsNepali: eventsNepaliRef.current.value,
    };
    updateFieldsOfResources(fields);
  };

  const updateFieldDigitalLibrary = () => {
    const fields = {
      digitalLibrary: digitalLibraryRef.current.value,
      digitalLibraryNepali: digitalLibraryNepaliRef.current.value,
    };
    updateFieldsOfResources(fields);
  };

  const updateFieldTransformingLives = () => {
    const fields = {
      transformingLives: transformingLivesRef.current.value,
      transformingLivesNepali: transformingLivesNepaliRef.current.value,
    };
    updateFieldsOfResources(fields);
  };

  const updateFieldBlog = () => {
    const fields = {
      blog: blogRef.current.value,
      blogNepali: blogNepaliRef.current.value,
    };
    updateFieldsOfResources(fields);
  };
  // const updateField = (field) => {
  //   const fieldRef = fieldRefs[field + ""];
  //   const fieldRefNepali = fieldRef[`${field}Nepali`];
  //   const fields = {
  //     [field]: fieldRef.current.value,
  //     [`${field}Nepali`]: fieldRefNepali.current.value,
  //   };
  //   updateFieldsOfResources(fields);
  // };

  const updateFieldsOfResources = async (fieldsData) => {
    try {
      const response = await updateResourcesField(fieldsData);
      toast.success("Updated Successfully!");
    } catch (error) {
      toast.error(error.response.data.errormessage);
    }
  };

  const getResourcesFields = async (field) => {
    const res = await getResourcesData(field);
    const data = res.data.data;
    const setDataFunc = stateDatas[field];
    setDataFunc(data[field]);
  };

  useEffect(() => {
    const fieldsKeys = Object.keys(stateDatas);
    fieldsKeys.forEach((field) => {
      getResourcesFields(field);
    });
  }, []);

  return (
    <>
      <main className="main">
        <div className="row card">
          <div className="col-md-12 card-body">
            <div className="mb-3">
              <label className="form-label" htmlFor="">
                Media {}
              </label>
              <JoditEditor
                name=""
                id=""
                value={media}
                ref={mediaRef}
              ></JoditEditor>
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <label className="form-label" htmlFor="">
                Media (Nepali)
              </label>
              <JoditEditor
                value={mediaNepali}
                ref={mediaNepaliRef}
              ></JoditEditor>
            </div>
          </div>
          <div className="col-md-12">
            <Button
              onClick={() => updateFieldMedia()}
              style={{ float: "right" }}
            >
              Update Media
            </Button>
          </div>
        </div>
        <hr />
        {/* News and Press Release */}
        <div className="row card">
          <div className="col-md-12 card-body">
            <div className="mb-3">
              <label className="form-label" htmlFor="">
                News and Press Release
              </label>
              <JoditEditor
                value={newsAndPressRelease}
                ref={newsAndPressReleaseRef}
              ></JoditEditor>
            </div>
          </div>
          <div className="col-md-12 card-body">
            <div className="mb-3">
              <label className="form-label" htmlFor="">
                News and Press Release (Nepali)
              </label>
              <JoditEditor
                value={newsAndPressReleaseNepali}
                ref={newsAndPressReleaseNepaliRef}
              ></JoditEditor>
            </div>
          </div>
          <div className="col-md-12">
            <Button
              onClick={() => updateFieldNewsAndPressRelease()}
              style={{ float: "right" }}
            >
              Update News and Press Release
            </Button>
          </div>
        </div>
        <hr />

        {/* Events */}
        <div className="row card">
          <div className="col-md-12 card-body">
            <div className="mb-3">
              <label className="form-label" htmlFor="">
                Events
              </label>
              <JoditEditor value={events} ref={eventsRef}></JoditEditor>
            </div>
          </div>
          <div className="col-md-12 card-body">
            <div className="mb-3">
              <label className="form-label" htmlFor="">
                Events (Nepali)
              </label>
              <JoditEditor
                value={eventsNepali}
                ref={eventsNepaliRef}
              ></JoditEditor>
            </div>
          </div>
          <div className="col-md-12">
            <Button
              onClick={() => updateFieldEvents()}
              style={{ float: "right" }}
            >
              Update Events
            </Button>
          </div>
        </div>

        <hr />

        {/* Digital Library */}
        <div className="row card">
          <div className="col-md-12 card-body">
            <div className="mb-3">
              <label className="form-label" htmlFor="">
                Digital Library
              </label>
              <JoditEditor
                value={digitalLibrary}
                ref={digitalLibraryRef}
              ></JoditEditor>
            </div>
          </div>
          <div className="col-md-12 card-body">
            <div className="mb-3">
              <label className="form-label" htmlFor="">
                Digital Library (Nepali)
              </label>
              <JoditEditor
                value={digitalLibraryNepali}
                ref={digitalLibraryNepaliRef}
              ></JoditEditor>
            </div>
          </div>
          <div className="col-md-12">
            <Button
              onClick={() => updateFieldDigitalLibrary()}
              style={{ float: "right" }}
            >
              Update Digital Library
            </Button>
          </div>
        </div>
        <hr />

        {/* Transforming Lives */}
        <div className="row card">
          <div className="col-md-12 card-body">
            <div className="mb-3">
              <label className="form-label" htmlFor="">
                Transforming Lives
              </label>
              <JoditEditor
                value={transformingLives}
                ref={transformingLivesRef}
              ></JoditEditor>
            </div>
          </div>
          <div className="col-md-12 card-body">
            <div className="mb-3">
              <label className="form-label" htmlFor="">
                Transforming Lives (Nepali)
              </label>
              <JoditEditor
                value={transformingLivesNepali}
                ref={transformingLivesNepaliRef}
              ></JoditEditor>
            </div>
          </div>
          <div className="col-md-12">
            <Button
              onClick={() => updateFieldTransformingLives()}
              style={{ float: "right" }}
            >
              Update Transforming Lives
            </Button>
          </div>
        </div>
        <hr />

        {/* Blog */}
        <div className="row card">
          <div className="col-md-12 card-body">
            <div className="mb-3">
              <label className="form-label" htmlFor="">
                Blog
              </label>
              <JoditEditor value={blog} ref={blogRef}></JoditEditor>
            </div>
          </div>
          <div className="col-md-12 card-body">
            <div className="mb-3">
              <label className="form-label" htmlFor="">
                Blog (Nepali)
              </label>
              <JoditEditor value={blogNepali} ref={blogNepaliRef}></JoditEditor>
            </div>
          </div>
          <div className="col-md-12">
            <Button
              onClick={() => updateFieldBlog()}
              style={{ float: "right" }}
            >
              Update Blog
            </Button>
          </div>
        </div>

        <hr />
      </main>
      <ToastContainer />
    </>
  );
};

export default Resources;
