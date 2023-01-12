/** @format */

import React from "react";

function Meme() {
  return (
    <section className="form">
      <form>
        <div className="form--input_wrapper">
          <input
            type="text"
            className="form--input_left"
            placeholder="Top text"
          />
          <input
            type="text"
            className="form--input_right"
            placeholder="Bottom text"
          />
        </div>
        <button className="form--button">Get a new meme image 🖼</button>
      </form>
    </section>
  );
}

export default Meme;
