import React from "react";

export const Department = ({ department, repository }) => (
  <span className="dept">
    {department && repository ? `${department}, ${respository} ` : ""}
    {department && `${department}`}
    {repository && `${repository}`}
  </span>
);
