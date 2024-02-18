import React from "react";

const FacebookButton = () => {
  const facebookPageUrl = "https://www.facebook.com";

  return (
    <a href={facebookPageUrl}>
      <button>Share on Facebook</button>
    </a>
  );
};

export default FacebookButton;
