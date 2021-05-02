import React from "react";
import SearchApiWrapper from "../styles/style.searchApiLink";
export const SearchApiLink = () => {
  return (
    <SearchApiWrapper>
      <span className="text-info">https://swapi.dev/api/people/?search=</span>
    </SearchApiWrapper>
  );
};
