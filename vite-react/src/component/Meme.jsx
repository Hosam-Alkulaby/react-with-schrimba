import React from "react";

let url;
function Buttonsmeme() {
  const [meme, SetMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [Allmemes, setallmemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setallmemes(data.data.memes));
  }, []);

  function getmemsimage() {
    const Allmemes = Allmemes.data.memes;
    const randomnumber = Math.floor(Math.random() * Allmemes.length);
    url = Allmemes[randomnumber].url;
    SetMeme((prev) => ({
      ...prev,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    SetMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="write text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="press to write"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getmemsimage}>
          Get a new meme image
        </button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Buttonsmeme;
