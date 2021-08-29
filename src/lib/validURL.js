export default (url) => {
  let validURL = false;
  if (url.length > 0) {
    const parsed = new URL(url);
    // Checking protocol and host
    if (
      ["https:", "http:"].includes(parsed.protocol) &&
      ("www.metmuseum.org" === parsed.host ||
        "images.metmuseum.org" === parsed.host)
    ) {
      validURL = url;
    }
  }
  return validURL;
};
