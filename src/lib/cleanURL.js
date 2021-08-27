export default (url) => {
  let cleanedURL = "#";
  if (url.length > 3) {
    const parsed = new URL(url);

    // Checking protocol and host
    if (
      ["https:", "http:"].includes(parsed.protocol) &&
      ("www.metmuseum.org" === parsed.host ||
        "images.metmuseum.org" === parsed.host)
    ) {
      cleanedURL = url;
    }
  }
  return cleanedURL;
};
