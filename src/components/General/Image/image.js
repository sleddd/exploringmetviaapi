import React, { Fragment, useState, useEffect } from "react";
import Placeholder from "../../Placeholders/image/Placeholder";
import DOMPurify from "dompurify";

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
          src={DOMPurify.sanitize(props.url)}
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
