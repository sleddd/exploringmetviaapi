import React, { Fragment, useState, useEffect } from "react";
import Placeholder from "../../General/Placeholders/Image/Placeholder";
import validURL from "../../../lib/validURL";
import Spinner from "../../General/Placeholders/Spinner/Default/Spinner";

export default (props) => {
  const [image, setImage] = useState({
    available: true,
    loading: true
  });

  useEffect(() => {
    checkValidSRC();
  }, [props.url]);

  const checkValidSRC = () => {
    if (validURL(props.url)) {
      setImage({
        available: true,
        loading: true
      });
    } else {
      handleImageError();
    }
  };

  const handleImageLoaded = () => {
    setImage({
      available: true,
      loading: false
    });
  };

  const handleImageError = () => {
    setImage({
      available: false,
      loading: false
    });
  };

  return (
    <Fragment>
      {image.available ? (
        <img
          src={props.url}
          alt={props.alt}
          onError={handleImageError}
          onLoad={handleImageLoaded}
          style={{ display: image.loading ? "none" : "block" }}
        />
      ) : (
        <Placeholder />
      )}
      {image.loading ? <Spinner /> : ""}
    </Fragment>
  );
};
