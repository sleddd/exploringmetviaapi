import React from "react";

export const Location = ({ geographyType, country }) => (
  <>
    {(geographyType || country) && <br />}
    {`${geographyType} ${country} `}
  </>
);
