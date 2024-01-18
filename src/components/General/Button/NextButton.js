import React from "react";
export default (props) => (
  <button className="nextBtn" onClick={() => props.onClickHandler()}>
    {props.buttonText} <span> &#8594;</span>
  </button>
);
