import React from "react";
export default (props) => (
  <a
    href={props.link}
    className="button moreBtn"
    target="_blank"
    rel="noreferrer"
  >
    {props.text}
  </a>
);
