import React, { Fragment, useState, useEffect } from "react";
import Placeholder from "../../General/Placeholders/Image/Placeholder";
import validURL from "../../../lib/validURL";
import Spinner from "../../General/Placeholders/Spinner/Default/Spinner";

export default (props) => {
  const [image, setImage] = useState(true);
  const [imgLoading, setImgLoading] = useState(true);

  useEffect(() => {
    checkImgSrc();
  }, [props.url]);

  const checkImgSrc = () => {
    // Set image loading to true
    setImgLoading(true);
    let validatedURL = validURL(props.url);
    // Check if image exists
    if (validatedURL) {
      fetch(validatedURL, { method: "HEAD" })
        .then((res) => {
          if (res.ok) {
            setImage(true);
          } else {
            setImage(false);
            setImgLoading(false);
          }
        })
        .catch((error) => {
          // Catch and account for occasional failed to
          // fetch error
          setImage(true);
        });
    }
  };

  const handleImageLoaded = () => {
    setImgLoading(false);
  };

  const handleImageError = () => {
    setImage(false);
    setImgLoading(false);
  };

  return (
    <Fragment>
      {image ? (
        <img
          src={props.url}
          alt={props.alt}
          onError={handleImageError}
          onLoad={handleImageLoaded}
          style={{ display: imgLoading ? "none" : "block" }}
        />
      ) : (
        <Placeholder />
      )}
      {imgLoading ? <Spinner /> : ""}
    </Fragment>
  );
};
