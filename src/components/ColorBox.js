import React from "react";
import ColorBoxWrapper from "../styles/style.colorbox";
function ColorBox({ color }) {
  //   console.log(film);
  return (
    <ColorBoxWrapper>
      <div className="color-box" style={{ backgroundColor: `${color}` }}>
        <span className="color-span">{color.toUpperCase()}</span>
      </div>
    </ColorBoxWrapper>
  );
}

export default ColorBox;
