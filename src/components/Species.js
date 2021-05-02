import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { android } from "@fortawesome/free-solid-svg-icons";
function Species({ link }) {
  const [specie, setfilm] = useState("");
  useEffect(() => {
    loadfilm1(link);
  }, [link]);
  const loadfilm1 = (link) => {
    fetch(`${link}`)
      .then((resp) => resp.json())
      .then((resp) => {
        //console.log(resp);
        setfilm(resp.name);
      });
  };

  //   console.log(film);
  if (specie === "Droid") {
    return <i className="fa fa-android" color="green"></i>;
  } else if (specie === "Human") {
    return <i class="fa fa-circle" aria-hidden="true"></i>;
  } else {
    return <i class="fa fa-question" aria-hidden="true"></i>;
  }
}

export default Species;
