import React, { useEffect, useState } from "react";

function Film({ link }) {
  const [film, setfilm] = useState("");
  useEffect(() => {
    loadfilm1(link);
  }, [link]);
  const loadfilm1 = (link) => {
    fetch(`${link}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setfilm(resp.title);
      });
  };

  return <li style={{ textDecoration: "none", listStyle: "star" }}>{film}</li>;
}

export default Film;
