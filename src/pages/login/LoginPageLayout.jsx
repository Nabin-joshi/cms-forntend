import React from "react";
import Login from "../../components/auth/login/Login";
import { ToastContainer } from "react-toastify";

export default function loginPageLayout() {
  return (
    <>
      <Login />
      <ToastContainer />
    </>
  );
}
