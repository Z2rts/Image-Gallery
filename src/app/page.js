'use client'
// import styles from './styles.css'
import { useEffect, useState } from "react";

import './styles.css'

function Test() {
  const [id, setId] = useState(1018)

  useEffect(() => {
    const generateRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const generateAndShowRandomNumber = () => {
      let randomNumber
      do {
        randomNumber = generateRandomNumber(1000, 1070);
      } while (
        randomNumber === 1034
        || randomNumber === 1017
        || randomNumber === 1030
        || randomNumber === 1046
        || randomNumber === 1057
        || randomNumber === 1007
      )
      setId(randomNumber)
    }

    const intervalId = setInterval(generateAndShowRandomNumber, 10000);

    return () => {
      clearInterval(intervalId)
    }

  },[])

  console.log("Current Value of id:", id);

  const images = [
    {
      original: `https://picsum.photos/id/${id}/1000/550/`
    }
  ]

  return (
    <div className='text'>
      <h1>Image Gallery</h1>
      <div className="container">
        {images.map((image) => (
          <div key={id} className="img">
            <img src={image.original} alt="Original" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;
