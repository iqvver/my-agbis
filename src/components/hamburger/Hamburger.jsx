import React from "react";

const Hamburger = () => {
  return (
    <div>
      <input id="toggle" type="checkbox"></input>
      <div className="hamburger-button">
        <label for="toggle" className="hamburger">
          <div className="top-bun"></div>
          <div className="bottom-bun"></div>
        </label>
      </div>
    </div>
  );
};

export default Hamburger;
