import React from "react";
import cleanURL from "../../../lib/cleanURL";

export default (props) => (
  <a
    href={cleanURL(props.link)}
    className="button moreBtn"
    target="_blank"
    rel="noreferrer"
  >
    {props.text}
  </a>
);
