import React from "react";

const Hamburger = () => {
  return (
    <div>
      <input id="toggle" type="checkbox"></input>
      <div class="hamburger-button">
        <label for="toggle" class="hamburger">
          <div class="top-bun"></div>
          <div class="bottom-bun"></div>
        </label>
      </div>
    </div>
  );
};

export default Hamburger;
