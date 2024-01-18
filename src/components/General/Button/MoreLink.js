import React, { Fragment } from "react";
import validURL from "../../../lib/validURL";

export default (props) => (
  <Fragment>
    {validURL(props.link) ? (
      <a
        href={props.link}
        className="button moreBtn"
        target="_blank"
        rel="noreferrer"
      >
        <span>&#128279;</span>
        {props.text}
      </a>
    ) : (
      ""
    )}
  </Fragment>
);
