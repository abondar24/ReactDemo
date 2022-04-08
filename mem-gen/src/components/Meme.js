import '../stylesheets/Meme.css';

import React from 'react';

export default function Meme() {



  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {

    //alternative to promise fetch
    // async function getMemes() {
    //   const resp = await fetch("https://api.imgflip.com/get_memes")
    //   const data = await resp.json()
    //   setAllMemes(data.data.memes)

    // }

    // getMemes()

    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => data.data.memes)

  
  }, [])


  function handleClick() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))

  }

  function handleChange(event) {
    const { name, value } = event.target

    setMeme((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
        <input type="text"
          placeholder="Top text"
          className="form-input"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input type="text"
          placeholder="Bottom text"
          className="form-input"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button className="form-button" onClick={handleClick}>
          Get a new image &#128512;
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>

    </main>
  )
}
