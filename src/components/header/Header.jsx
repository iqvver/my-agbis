import React from "react";
import Hamburger from "../hamburger/Hamburger";
import Social from "../social/Social";
import logo from "../../assets/images/logo.png";
import Search from "../search/Search";
import Menu from "../menu/Menu";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header__contacts">
          <a className="header__phone" href="tel:+37322838787">
            +(373) 22 83-87-87
          </a>
          <Social />
        </div>
        <Menu />
        <Hamburger />
      </div>

      <div className="sub-header">
        <div className="sub-header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="sub-header__search">
          <Search placeholder={"Прайс-лист"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
