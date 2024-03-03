import React, { useEffect, useState } from "react";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import { Outlet } from "react-router-dom";
import "../../../src/assets/css/style.css";
export default function HomePageLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
