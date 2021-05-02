import React, { useEffect, useState } from "react";

function StarShips({ link }) {
  const [starShip, setstarShip] = useState("");
  useEffect(() => {
    loadStarShip(link);
  }, [link]);
  const loadStarShip = (link) => {
    fetch(`${link}`)
      .then((resp) => resp.json())
      .then((resp) => {
        //console.log(resp.title);
        setstarShip(resp.name);
      });
  };
  //   console.log(film);
  return <li>{starShip}</li>;
}

export default StarShips;
