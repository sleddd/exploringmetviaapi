import Placeholder from "./Placeholder";
import React, { useState, useEffect, Fragment } from "react";

export default MetObject = (props) => {
  const [metData, setMetData] = useState(false);

  useEffect(() => {
    getRandomObject();
  }, []);

  const getRandomObject = () => {
    let randomNum = Math.random() * 470000;
    fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
        Math.floor(randomNum)
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.message == "ObjectID not found") {
          getRandomObject();
        } else {
          setMetData(data);
        }
      });
  };
  return (
    <div className="metObject">
      {metData ? (
        <Fragment>
          {metData.primaryImage ? (
            <img src={metData.primaryImage} className="col-md-6 pl-5" />
          ) : (
            <Placeholder />
          )}
          <div>
            <h2>
              {metData.title && metData.title.length < 1
                ? metData.objectName
                : metData.title}
            </h2>
            <p>
              {metData.geographyType} {metData.country}{" "}
              <span>{metData.objectDate}</span>{" "}
              {metData.medium
                ? " from " + metData.medium.toLowerCase() + "."
                : ""}{" "}
              {metData.artistDisplayName
                ? "By " + metData.artistDisplayName + "."
                : ""}{" "}
              {metData.department ? metData.department + " of the " : ""}{" "}
              {metData.repository}.{" "}
              <span>
                {metData.creditLine}
                <br />
                {metData.culture}
              </span>
            </p>
            <a
              href={metData.objectURL}
              className="button moreBtn"
              target="_blank"
            >
              View Details
            </a>
            <button
              className="nextBtn"
              onClick={() => {
                getRandomObject();
              }}
            >
              Next Slide <span>&#8594;</span>
            </button>
          </div>
        </Fragment>
      ) : (
        ""
      )}
    </div>
  );
};
