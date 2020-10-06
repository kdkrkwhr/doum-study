import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Mainzz from "views/doum/study/Main.js";

function Indexasdf() {
  return (
    <>
      <div>
      <IndexNavbar />
      <div className="wrapper">
        <Mainzz />
        <DarkFooter />
      </div>
    </div>
    </>
  );
}

export default Indexasdf;