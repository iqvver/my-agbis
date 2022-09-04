import React, { useState, useEffect, useRef } from "react";
import Divider from "../divider/Divider";

const DropLang = () => {
  const [Lang, getLang] = useState("RU");
  const [isLangOpen, setLangOpen] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setLangOpen(false));
  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }
  return (
    <div className="dropdown">
      {isLangOpen ? (
        <div ref={ref}>
          <input id="language" type="checkbox" checked name="menu" />
          <label for="language">{Lang}</label>
          <ul className="submenu">
            <li>
              <a onClick={() => getLang("RU")}>RU</a>
            </li>
            <Divider />
            <li>
              <a onClick={() => getLang("ENG")}>ENG</a>
            </li>
            <Divider />
            <li>
              <a onClick={() => getLang("MOL")}>MOL</a>
            </li>
          </ul>
        </div>
      ) : (
        <label for="language" onClick={() => setLangOpen(true)}>
          {Lang}
        </label>
      )}
    </div>
  );
};

export default DropLang;
