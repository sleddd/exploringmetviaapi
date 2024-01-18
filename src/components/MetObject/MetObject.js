import React, { useEffect, useState, Fragment } from "react";
import Image from "../General/Image/image";
import NextButton from "../General/Button/NextButton";
import MoreLink from "../General/Button/MoreLink";
import testData from "../../../testing/testData";
import { useMountedRef } from "../../lib/useMountedRef";
import { Artist } from "./subcomponents/Artist";
import { Department } from "./subcomponents/Department";
import { Repository } from "./subcomponents/Repository";
import { CreditLine } from "./subcomponents/CreditLine";
import { Medium } from "./subcomponents/Medium";
import { ObjectDate } from "./subcomponents/ObjectDate";
import { Location } from "./subcomponents/Location";
import { ObjectTitle } from "./subcomponents/ObjecTitle";

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
      {metData && (
        <div className="metObject">
          <Image
            url={metData.primaryImage}
            alt={metData.objectName}
            className="col-md-6 pl-5"
          />
          <div>
            <ObjectTitle name={metData.objectName} title={metData.title} />
            <p>
              <ObjectDate date={metData.objectDate} />
              <Medium medium={metData.medium} />
              <Artist name={metData.artistDisplayName} />
              <br />
              <Location
                geographyType={metData.geographyType}
                country={metData.country}
              />
              <Repository repository={metData.repository} />
              <Department department={metData.department} />
              <CreditLine
                credit={metData.CreditLine}
                culture={metData.culture}
              />
            </p>
            <MoreLink link={metData.objectURL} text={"View Details"} />
            <NextButton
              onClickHandler={getRandomObject}
              buttonText="Next Slide"
            />
          </div>
        </div>
      )}
    </Fragment>
  );
}
