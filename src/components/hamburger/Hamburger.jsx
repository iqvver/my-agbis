import React from "react";

const Hamburger = () => {
  return (
    <>
      <input id="toggle" type="checkbox" />
      <div className="hamburger-button">
        <label for="toggle" className="hamburger">
          <div className="top-bun" />
          <div className="mid-bun" />
          <div className="bottom-bun" />
        </label>
      </div>
    </>
  );
};

export default Hamburger;
