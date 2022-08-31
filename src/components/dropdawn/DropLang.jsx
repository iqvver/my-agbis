import React from "react";

const DropLang = () => {
  return (
    <div className="dropdown">
      <input id="language" type="checkbox" name="menu" />
      <label for="language">Language</label>
      <ul className="submenu">
        <li>
          <a href="#">RU</a>
        </li>
        <li>
          <a href="#">ENG</a>
        </li>
        <li>
          <a href="#">MOL</a>
        </li>
      </ul>
    </div>
  );
};

export default DropLang;
