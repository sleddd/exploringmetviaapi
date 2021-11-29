import React from "react";

export const Department = ({ department, repository }) => (
  <>
    {department && `${department}`}
    <br />
    {repository}
  </>
);
