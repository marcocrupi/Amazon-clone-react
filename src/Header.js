import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
        alt="amazon logo"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* Logo */}
      </div>
    </div>
  );
}

export default Header;
