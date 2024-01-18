import React from "react";
export const Artist = ({ name }) => (
  <span className="artist">{name && `By ${name}`}</span>
);
