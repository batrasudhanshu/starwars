import React, { useEffect, useState } from "react";

function Vehicle({ link }) {
  const [vehicle, setvehicle] = useState("");
  useEffect(() => {
    loadvehicle(link);
  }, [link]);
  const loadvehicle = (link) => {
    fetch(`${link}`)
      .then((resp) => resp.json())
      .then((resp) => {
        //console.log(resp.title);
        setvehicle(resp.name);
      });
  };
  //   console.log(film);
  return <li>{vehicle}</li>;
}

export default Vehicle;
