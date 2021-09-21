import React, {useState} from "react";
import styles from "./Film.module.scss"
const jsonFilms = require('../../films.json');

const Film = () => {
  const [randomFilm, setRandomFilm] = useState(jsonFilms[Math.floor(Math.random() * jsonFilms.length)])
  return (
    <div className={styles["film"]}>
      <a href={`https://www.imdb.com/title/${randomFilm.imdbid}`} target="_blank">
        <h3>{randomFilm.title}</h3>
        <img src={randomFilm.poster} alt={`${randomFilm.title} Poster`} />
      </a>
    </div>
  )
};

export default Film;