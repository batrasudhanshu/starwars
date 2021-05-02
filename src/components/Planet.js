import React, { useEffect, useState } from "react";

function Planet({ link }) {
  const [planetLink, setplanetLink] = useState("");
  useEffect(() => {
    loadplanetLink(link);
  }, [link]);
  const loadplanetLink = (link) => {
    fetch(`${link}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setplanetLink(resp.name);
      });
  };

  return (
    <li style={{ textDecoration: "none", listStyle: "none" }}>{planetLink}</li>
  );
}

export default Planet;
