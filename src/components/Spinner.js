import React from "react";
import SpinnerWrapper from "../styles/style.spinner";
export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <div className="spin-outer">
        <span className="spinner-text">LOADING...</span>
        <br />
        <i className="fa fa-spinner spin-icon"></i>
      </div>
    </SpinnerWrapper>
  );
};
