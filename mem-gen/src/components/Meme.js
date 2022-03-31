import '../stylesheets/Meme.css';

import React from 'react';
import memeData from "../memeData.js"

export default function Meme(){



  const [meme,setMeme] = React.useState({
    topText:"",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg"
  })

  const [allMemes,setAllMemes] = React.useState(memeData)


  function handleClick() {
      const memes = memeData.data.memes
      const id = Math.floor(Math.random() * memes.length)
      const url = memes[id].url
      setMeme(prevMeme => ({
         ...prevMeme,
         randomImage: url
      }))
  }

  return (
      <main>
         <div className="form">
           <input type="text"
                  placeholder="Top text"
                  className="form-input"
          />
           <input type="text"
                  placeholder="Bottom text"
                  className="form-input"
          />
           <button className="form-button" onClick={handleClick}>
                  Get a new image &#128512;
          </button>
         </div>
         <img src={meme.randomImage}  className="meme-image"/>
      </main>
  )
}
