/** @format */

import React from "react";
import trollface from "../images/Troll Face.png";

function Header() {
  return (
    <header>
      <img alt="meme logo" src={trollface} className="header--icon" />
      <h1 className="header--title">Meme Generator</h1>
      <h2 className="header--subtitle">React Course - Project 3</h2>
    </header>
  );
}

export default Header;
