import React from "react";
import { Outlet } from "react-router-dom";

import AdminHeader from "../../components/auth/admin/AdminHeader";
import AdminSidebar from "../../components/auth/admin/AdminSidebar";
import AdminFooter from "../../components/auth/admin/AdminFooter";

function AdminPage() {
  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <Outlet />
      <AdminFooter />
    </>
  );
}

export default React.memo(AdminPage);
