import React from "react";
import DropLang from "../dropdawn/DropLang";
import Hamburger from "../hamburger/Hamburger";
import Social from "../social/Social";
import logo from "../../assets/images/logo.png";
import Search from "../search/Search";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__contacts">
          <div className="header__phone">
            <a href="tel:+37322838787">+(373) 22 83-87-87</a>
          </div>
          <div className="header__social">
            <Social />
          </div>
        </div>
        <div className="header__language">
          <DropLang />
        </div>
      </div>
      <div className="sub-header">
        <div className="sub-header__hamburger">
          <Hamburger />
        </div>
        <div className="sub-header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="sub-header__search">
          <div className="search_header">
            <Search placeholder={"Прайс-лист"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
