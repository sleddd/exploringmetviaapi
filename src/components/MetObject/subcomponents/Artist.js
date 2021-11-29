import React from "react";
export const Artist = ({ name }) => (
  <>
    <br />
    {name && `By ${name}`}
    {name && <br />}
  </>
);
