import React from "react";

export const CreditLine = ({ credit, culture }) => (
  <span className="credit">
    {credit || culture ? ", " : ""}
    {credit}
    {culture}
  </span>
);
