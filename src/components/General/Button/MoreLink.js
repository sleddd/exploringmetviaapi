import React from "react";
import validURL from "../../../lib/validURL";

export default (props) => (
  <a
    href={validURL(props.link) ? props.link : "#"}
    className="button moreBtn"
    target="_blank"
    rel="noreferrer"
  >
    {props.text}
  </a>
);
