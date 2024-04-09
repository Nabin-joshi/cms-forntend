import React from "react";
import styles from "./Popup.module.css";

const PopUp = ({ onCloseModal }) => {
  const closeCustomModal = (e) => {
    onCloseModal(e);
  };
  return (
    <div id="myModal" className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <span className={styles.close} onClick={closeCustomModal}>
            &times;
          </span>
          <h4>Modal Header</h4>
        </div>
        <div className={styles.modalBody}>
          <p>Some text in the Modal Body</p>
          <p>Some other text...</p>
        </div>
        <div className={styles.modalFooter}>
          <h3>Modal Footer</h3>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
