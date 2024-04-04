import React, { useEffect, useRef, useState } from "react";
import {
  getOurProgramData,
  updateOurProgramField,
} from "../../../../services/ourProgramService";
import { toast } from "react-toastify";
import { Button } from "@mui/joy";
import JoditEditor from "jodit-react";

const OurProgram = () => {
  // For advocacyAwarness
  const advocacyAwarnessRef = useRef();
  const advocacyAwarnessNepaliRef = useRef();
  const [advocacyAwarness, setAdvocacyAwarness] = useState("");
  const [advocacyAwarnessNepali, setAdvocacyAwarnessNepali] = useState("");

  // For empowermentAndCommunityInclusion
  const empowermentAndCommunityInclusionRef = useRef();
  const empowermentAndCommunityInclusionNepaliRef = useRef();
  const [
    empowermentAndCommunityInclusion,
    setEmpowermentAndCommunityInclusion,
  ] = useState("");
  const [
    empowermentAndCommunityInclusionNepali,
    setEmpowermentAndCommunityInclusionNepali,
  ] = useState("");

  // For strengthenCommunitySupportSystem
  const strengthenCommunitySupportSystemRef = useRef();
  const strengthenCommunitySupportSystemNepaliRef = useRef();
  const [
    strengthenCommunitySupportSystem,
    setStrengthenCommunitySupportSystem,
  ] = useState("");
  const [
    strengthenCommunitySupportSystemNepali,
    setStrengthenCommunitySupportSystemNepali,
  ] = useState("");

  // For organizationalDevelopment
  const organizationalDevelopmentRef = useRef();
  const organizationalDevelopmentNepaliRef = useRef();
  const [organizationalDevelopment, setOrganizationalDevelopment] =
    useState("");
  const [organizationalDevelopmentNepali, setOrganizationalDevelopmentNepali] =
    useState("");

  // For ecsc
  const ecscRef = useRef();
  const ecscNepaliRef = useRef();
  const [ecsc, setEcsc] = useState("");
  const [ecscNepali, setEcscNepali] = useState("");

  // Define an object with each term mapped to an array containing its state and ref
  const stateDatas = {
    advocacyAwarness: [setAdvocacyAwarness, advocacyAwarnessRef],
    advocacyAwarnessNepali: [
      setAdvocacyAwarnessNepali,
      advocacyAwarnessNepaliRef,
    ],
    empowermentAndCommunityInclusion: [
      setEmpowermentAndCommunityInclusion,
      empowermentAndCommunityInclusionRef,
    ],
    empowermentAndCommunityInclusionNepali: [
      setEmpowermentAndCommunityInclusionNepali,
      empowermentAndCommunityInclusionNepaliRef,
    ],
    strengthenCommunitySupportSystem: [
      setStrengthenCommunitySupportSystem,
      strengthenCommunitySupportSystemRef,
    ],
    strengthenCommunitySupportSystemNepali: [
      setStrengthenCommunitySupportSystemNepali,
      strengthenCommunitySupportSystemNepaliRef,
    ],
    organizationalDevelopment: [
      setOrganizationalDevelopment,
      organizationalDevelopmentRef,
    ],
    organizationalDevelopmentNepali: [
      setOrganizationalDevelopmentNepali,
      organizationalDevelopmentNepaliRef,
    ],
    ecsc: [setEcsc, ecscRef],
    ecscNepali: [setEcscNepali, ecscNepaliRef],
  };

  const stateKeys = Object.keys(stateDatas);

  const updateField = async (field) => {
    const nepaliField = field + "Nepali";
    const fieldsData = {
      [field]: stateDatas[field][1].current.value,
      [nepaliField]: stateDatas[nepaliField][1].current.value,
    };
    try {
      const response = await updateOurProgramField(fieldsData);
      toast.success("updated Successfully");
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  useEffect(() => {
    async function fetchOurProgram(field) {
      try {
        const res = await getOurProgramData(field);
        const resData = res.data.data;
        const stateFunc = stateDatas[field][0];
        stateFunc(resData[field]);
      } catch (error) {}
    }

    stateKeys.forEach((field) => {
      fetchOurProgram(field);
    });
  }, []);

  return (
    <>
      <main class="main">
        <div class="row card">
          <div class="col-md-12 card-body">
            <div class="mb-3">
              <label class="form-label" for="advocacyAwareness">
                Advocacy Awareness
              </label>
              <JoditEditor
                value={advocacyAwarness}
                ref={advocacyAwarnessRef}
              ></JoditEditor>
            </div>
          </div>
          <div class="col-md-12 card-body">
            <div class="mb-3">
              <label class="form-label" for="advocacyAwarenessNepali">
                Advocacy Awareness (Nepali)
              </label>
              <JoditEditor
                value={advocacyAwarnessNepali}
                ref={advocacyAwarnessNepaliRef}
              ></JoditEditor>
            </div>
          </div>
          <div class="col-md-12">
            <Button
              onClick={() => {
                updateField("advocacyAwarness");
              }}
              style={{ float: "right" }}
            >
              Update Advocacy Awareness
            </Button>
          </div>
        </div>
        <hr />
        <div class="row card">
          <div class="col-md-12 card-body">
            <div class="mb-3">
              <label class="form-label" for="empowermentAndCommunityInclusion">
                Empowerment And Community Inclusion
              </label>
              <JoditEditor
                value={empowermentAndCommunityInclusion}
                ref={empowermentAndCommunityInclusionRef}
              ></JoditEditor>
            </div>
          </div>
          <div class="col-md-12 card-body">
            <div class="mb-3">
              <label
                class="form-label"
                for="empowermentAndCommunityInclusionNepali"
              >
                Empowerment And Community Inclusion (Nepali)
              </label>
              <JoditEditor
                value={empowermentAndCommunityInclusionNepali}
                ref={empowermentAndCommunityInclusionNepaliRef}
              ></JoditEditor>
            </div>
          </div>
          <div class="col-md-12">
            <Button
              onClick={() => updateField("empowermentAndCommunityInclusion")}
              style={{ float: "right" }}
            >
              Update Empowerment And Community Inclusion
            </Button>
          </div>
        </div>
        <div class="row card">
          <div class="col-md-12 card-body">
            <div class="mb-3">
              <label class="form-label" for="strengthenCommunitySupportSystem">
                Strengthen Community Support System
              </label>
              <JoditEditor
                value={strengthenCommunitySupportSystem}
                ref={strengthenCommunitySupportSystemRef}
              ></JoditEditor>
            </div>
          </div>
          <div class="col-md-12 card-body">
            <div class="mb-3">
              <label
                class="form-label"
                for="strengthenCommunitySupportSystemNepali"
              >
                Strengthen Community Support System (Nepali)
              </label>
              <JoditEditor
                value={strengthenCommunitySupportSystemNepali}
                ref={strengthenCommunitySupportSystemNepaliRef}
              ></JoditEditor>
            </div>
          </div>
          <div class="col-md-12">
            <Button
              onClick={() => updateField("strengthenCommunitySupportSystem")}
              style={{ float: "right" }}
            >
              Update Strengthen Community Support System
            </Button>
          </div>
        </div>
        <hr />

        <div class="row card">
          <div class="col-md-12 card-body">
            <div class="mb-3">
              <label class="form-label" for="organizationalDevelopment">
                Organizational Development
              </label>
              <JoditEditor
                value={organizationalDevelopment}
                ref={organizationalDevelopmentRef}
              ></JoditEditor>
            </div>
          </div>
          <div class="col-md-12 card-body">
            <div class="mb-3">
              <label class="form-label" for="organizationalDevelopmentNepali">
                Organizational Development (Nepali)
              </label>
              <JoditEditor
                value={organizationalDevelopmentNepali}
                ref={organizationalDevelopmentNepaliRef}
              ></JoditEditor>
            </div>
          </div>
          <div class="col-md-12">
            <Button
              onClick={() => updateField("organizationalDevelopment")}
              style={{ float: "right" }}
            >
              Update Organizational Development
            </Button>
          </div>
        </div>
        <hr />

        <div class="row card">
          <div class="col-md-12 card-body">
            <div class="mb-3">
              <label class="form-label" for="ecsc">
                ECSC
              </label>
              <JoditEditor value={ecsc} ref={ecscRef}></JoditEditor>
            </div>
          </div>
          <div class="col-md-12 card-body">
            <div class="mb-3">
              <label class="form-label" for="ecscNepali">
                ECSC (Nepali)
              </label>
              <JoditEditor value={ecscNepali} ref={ecscNepaliRef}></JoditEditor>
            </div>
          </div>
          <div class="col-md-12">
            <Button
              onClick={() => updateField("ecsc")}
              style={{ float: "right" }}
            >
              Update ECSC
            </Button>
          </div>
        </div>
        <hr />
        <hr />

        <hr />
      </main>
    </>
  );
};

export default OurProgram;
