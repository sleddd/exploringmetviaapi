import React from "react";

export const Location = ({ geographyType, country }) => {
  if ((geographyType && geographyType.length) || (country && country.length)) {
    return <span className="location">{`  ${geographyType} ${country} `}</span>;
  } else {
    return null;
  }
};
