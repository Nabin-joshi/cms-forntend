import React, { useEffect, useState } from "react";
import styles from "./Popup.module.css";
import { getPopupPage } from "../../../services/api";

const PopUp = ({ onCloseModal }) => {
  const [popData, setPopupData] = useState("");
  const closeCustomModal = (e) => {
    onCloseModal(e);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let popup = await getPopupPage();
        if (popup.data.selectedData) {
          setPopupData(popup.data.selectedData);
        }
      } catch (error) {
        console.error("Error fetching slider content:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div id="myModal" className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <span className={styles.close} onClick={closeCustomModal}>
            &times;
          </span>
          <h4>
            {popData && popData.heading ? popData.heading : "Modal Header"}
          </h4>
        </div>
        <div className={styles.modalBody}>
          <div
            dangerouslySetInnerHTML={{
              __html: popData && popData.content ? popData.content : "",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
