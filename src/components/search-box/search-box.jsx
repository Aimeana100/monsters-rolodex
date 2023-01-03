import React from "react";
import "./search-box.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className="search__container">
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
