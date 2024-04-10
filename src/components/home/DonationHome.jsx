import React, { useEffect, useState } from "react";
import { getDonationInfo } from "../../services/donationService";
import { toastPosition } from "../../config/toastProp";
import { toast } from "react-toastify";

const DonationHome = () => {
  const [donationDatas, setDonationDatas] = useState({
    header: "",
    anyAmountCountHeader: "",
    bankName: "",
    location: "",
    swiftCode: "",
    iconDescs: [],
    currency: "",
    acNumber: "",
  });
  const fieldsList = Object.keys(donationDatas).filter(
    (key) => key !== "iconDescs"
  );
  const [locale, setLocale] = useState("nep");

  useEffect(() => {
    async function fetchDonationInfo(field, loc) {
      try {
        const resp = await getDonationInfo(field + loc);
        const respData = resp.data.data;
        const fieldData = respData[field + loc];
        setDonationDatas((formData) => ({ ...formData, [field]: fieldData }));
      } catch (error) {
        toast.error(`${error.response.data.errormessage}`, toastPosition);
      }
    }
    fetchDonationInfo("iconDescs", "");

    fieldsList.forEach((field) => {
      if (locale === "eng") {
        fetchDonationInfo(field, "");
      } else if (locale === "nep") {
        fetchDonationInfo(field, "Nepali");
      }
    });
  }, []);
  return (
    <>
      <div className="row">
        <div
          className="col-md-6"
          style={{
            textAlign: "center",
            padding: "0px",
            background: "#f7f7f7",
          }}
        >
          <img
            style={{ width: "100%", height: "67vh", objectFit: "cover" }}
            src="https://creasion.org/storage/donate/banner.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="row">
        <div
          className="col-md-6"
          style={{
            textAlign: "center",
            padding: "50px",
            background: "#f7f7f7",
          }}
        >
          <div className="row" style={{ textAlign: "center" }}>
            <h5
              style={{
                margin: "auto",
              }}
            >
              <span>{donationDatas.header} </span>
            </h5>
          </div>
          <div className="row">
            {/* <div className="col-md-6"></div> */}
            <ul style={unorderedListStyle}>
              {donationDatas &&
                donationDatas.iconDescs &&
                donationDatas.iconDescs.map((iconDesc, index) => (
                  <li
                    key={"ul" + index}
                    style={{
                      margin: "30px 0",
                      flex: "50%",
                      textAlign: "center",
                      padding: "0 15px",
                      boxSizing: "border-box",
                    }}
                  >
                    <img style={ulliimagestyle} src={iconDesc.icon} alt="" />
                    <h5>{locale === "eng" && iconDesc.description}</h5>
                    <h5>{locale === "nep" && iconDesc.descriptionNepali}</h5>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div
          className="col-md-6 card"
          style={{
            background: "#f2f2f2",
            height: "100%",
            textAlign: "center",
            padding: "50px",
          }}
        >
          <h5>{donationDatas.anyAmountCountHeader}</h5>
          <div
            style={{
              marginTop: "30px",
              textAlign: "center",
              padding: "2.3em",
              margin: "30px 90px",
              background: "#f7f7f7",
              boxShadow: "0 0 1.875rem rgba(0, 0, 0, 0.1)",
            }}
          >
            <h5>{donationDatas.bankName} </h5>
            <p>{donationDatas.location}</p>
            <p>{donationDatas.swiftCode}</p>

            <p>{donationDatas.currency}</p>
            <p>A/C - {donationDatas.acNumber}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationHome;

const unorderedListStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  paddingRight: "60px",
  listStyle: "none",
  padding: 0,
  margin: 0,
  background: "#f7f7f7",
  textAlign: "center",
  padding: "50px",
};

const ulliimagestyle = {
  maxWidth: "100%",
  height: "auto",
  transition: "all 0.3s ease-out",
  verticalAlign: "middle",
  borderStyle: "none",
  width: "70px",
  height: "70px",
  border: "3px solid #14b6cb",
  borderRadius: "50%",
  marginRight: "10px",
};
