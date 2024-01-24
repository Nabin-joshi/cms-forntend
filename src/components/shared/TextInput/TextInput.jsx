import React from "react";
import styles from "./TextInput.module.css";

export default function TextInput(props) {
  return (
    <>
      <input className="form-control" {...props} />
      {props.error && (
        <p className={styles.errorMessage}>{props.errormessage} !</p>
      )}
    </>
  );
}
