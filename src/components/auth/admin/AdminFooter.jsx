import React from "react";
import { NavLink } from "react-router-dom";

const AdminFooter = () => {
  return (
    <>
      <footer id="footer" className="Ikhatafooter">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Koshish Nepal</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <NavLink>Volcosoft pvt ltd</NavLink>
        </div>
      </footer>
    </>
  );
};

export default AdminFooter;
