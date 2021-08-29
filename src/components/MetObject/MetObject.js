import React, { useState, useEffect, Fragment } from "react";
import Image from "../General/Image/image";
import NextButton from "../General/Button/NextButton";
import MoreLink from "../General/Button/MoreLink";
import validateURL from "../../lib/validURL";
import testData from "../../../testing/testData";

export default (props) => {
  const [metData, setMetData] = useState(false);
  const getRandomObject = () => {
    //setMetData(testData);
    //return;
    let randomNum = Math.random() * 470000;

    fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
        Math.floor(randomNum)
    )
      .then((response) => response.json())
      .then((data) => {
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

  return (
    <div className="metObject">
      {metData ? (
        <Fragment>
          <Image
            url={metData.primaryImage}
            alt={metData.objectName}
            className="col-md-6 pl-5"
          />
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
            <MoreLink
              link={validateURL(metData.objectURL) ? metData.objectURL : "#"}
              text={"View Details"}
            />
            <NextButton onClickHandler={getRandomObject} text="Next Slide" />
          </div>
        </Fragment>
      ) : (
        ""
      )}
    </div>
  );
};
