/** @format */

import React from "react";
// import memesData from "../memesData";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    console.log("effect ran");
    fetch(`https://api.imgflip.com/get_memes`)
      .then((response) => response.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const memesURL = allMemes[randomNumber].url;
    setMeme((prevState) => ({
      ...prevState,
      randomImage: memesURL,
    }));
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMemeState) => ({
      ...prevMemeState,
      [name]: value,
    }));
  }

  return (
    <section className="form">
      <div className="form--input_wrapper">
        <input
          type="text"
          className="form--input_left"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form--input_right"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </div>
      <button className="form--button" onClick={getMemeImage}>
        Get a new meme image 🖼
      </button>
      <div className="meme--container">
        <img alt="meme" src={meme.randomImage} className="meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </section>
  );
}

export default Meme;
