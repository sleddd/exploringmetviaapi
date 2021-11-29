import React from "react";

export const ObjectTitle = ({ title, name }) => (
  <h2>{title && title.length < 1 ? name : title}</h2>
);
