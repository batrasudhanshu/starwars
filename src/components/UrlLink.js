import React, { useEffect, useState } from "react";

function UrlLink({ link }) {
  const [urlLink, seturl] = useState("");
  useEffect(() => {
    loadurlLink(link);
  }, [link]);
  const loadurlLink = (link) => {
    fetch(`${link}`)
      .then((resp) => resp.json())
      .then((resp) => {
        seturl(resp.name);
      });
  };

  return (
    <li style={{ textDecoration: "none", listStyle: "none" }}>{urlLink}</li>
  );
}

export default UrlLink;
