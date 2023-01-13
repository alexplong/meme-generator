/** @format */

import React from "react";
import trollface from "../images/Troll Face.png";

function Header() {
  return (
    <header>
      <img alt="meme logo" src={trollface} className="header--icon" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--subtitle">React Course - Project 3</h4>
    </header>
  );
}

export default Header;
