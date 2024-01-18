import React from "react";
export const Artist = ({ name }) => (
  <span class="artist">{name && `By ${name}`}</span>
);
