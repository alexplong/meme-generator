/** @format */

import React from "react";
import memesData from "../memesData";

function Meme() {
  const [memeImage, setMemeImage] = React.useState(
    "https://i.imgflip.com/30b1gx.jpg"
  );

  const getMemeImage = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const memesURL = memesArray[randomNumber].url;
    setMemeImage(memesURL);
    // return memesURL
  };

  return (
    <section className="form">
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
      <button className="form--button" onClick={getMemeImage}>
        Get a new meme image 🖼
      </button>
      <div className="meme--container">
        <img alt="meme" src={memeImage} className="meme" />
      </div>
    </section>
  );
}

export default Meme;
