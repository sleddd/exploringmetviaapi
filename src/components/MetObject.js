import Placeholder from "./Placeholder";
import React, { useState, useEffect, Fragment } from "react";

export default (props) => {
  const [metData, setMetData] = useState(false);
  const [image, setImage] = useState({
    loading: true,
    available: true
  });

  const getRandomObject = () => {
    let randomNum = Math.random() * 470000;
    fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
        Math.floor(randomNum)
    )
      .then((response) => response.json())
      .then((data) => {
        setImage({ loading: true, available: true });
        if (
          data.message === "ObjectID not found" ||
          data.message === "Not a valid object"
        ) {
          getRandomObject();
        } else {
          setMetData(data);
        }
      });
  };

  useEffect(() => {
    getRandomObject();
  }, []);

  const handleImageLoaded = () => {
    setImage({ ...image, loading: false });
  };

  const handleImageError = () => {
    setImage({ loading: false, available: false });
  };
  return (
    <div className="metObject">
      {metData ? (
        <Fragment>
          {image.available ? (
            <img
              src={metData.primaryImage}
              alt={metData.objectName}
              className="col-md-6 pl-5"
              onLoad={handleImageLoaded}
              onError={handleImageError}
            />
          ) : (
            <Placeholder />
          )}
          {!image.loading ? (
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
                rel="noreferrer"
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
          ) : (
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </Fragment>
      ) : (
        ""
      )}
    </div>
  );
};
