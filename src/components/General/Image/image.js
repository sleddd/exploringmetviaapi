import React, { Fragment, useState, useEffect } from "react";
import Placeholder from "../../Placeholders/image/Placeholder";
import cleanURL from "../../../lib/cleanURL";

export default (props) => {
  const [image, setImage] = useState(true);

  useEffect(() => {
    setImage(true);
  }, [props.url]);

  const handleImageError = () => {
    setImage(false);
  };
  return (
    <Fragment>
      {image ? (
        <img
          src={cleanURL(props.url)}
          alt={props.alt}
          onError={handleImageError}
          onLoad={() => {
            props.onLoadHandler();
          }}
        />
      ) : (
        <Placeholder onLoadHandler={props.onLoadHandler} />
      )}
    </Fragment>
  );
};
