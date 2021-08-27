import React, { Fragment } from "react";
import MetObject from "../components/MetObject/MetObject";
import Navbar from "../components/Navbar/Navbar";
export default (props) => {
  return (
    <Fragment>
      <Navbar />
      <MetObject />
    </Fragment>
  );
};
