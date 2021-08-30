import React, { useEffect, useState, Fragment } from "react";
import Image from "../General/Image/image";
import NextButton from "../General/Button/NextButton";
import MoreLink from "../General/Button/MoreLink";
import testData from "../../../testing/testData";
import { useMountedRef } from "../../lib/useMountedRef";

export default function (props) {
  const [metData, setMetData] = useState({});
  const mounted = useMountedRef();

  const getRandomObject = async () => {
    /*if (mounted.current) {
      setMetData(testData);
    }
    return;*/
    const randomNum = Math.random() * 470000;
    const metResponse = await fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
        Math.floor(randomNum)
    );
    const response = await metResponse;
    if (404 === response.status) {
      return getRandomObject();
    }
    setMetData(await response.json());
  };

  useEffect(() => {
    mounted.current = true;
    getRandomObject();
    return () => (mounted.current = false);
  }, []);

  return (
    <Fragment>
      {metData ? (
        <div className="metObject">
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
            <MoreLink link={metData.objectURL} text={"View Details"} />
            <NextButton onClickHandler={getRandomObject} text="Next Slide" />
          </div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}
