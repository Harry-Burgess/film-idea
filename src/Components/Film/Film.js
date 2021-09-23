import React from "react";
import styles from "./Film.module.scss";
const jsonFilms = require("../../films.json");

const Film = (props) => {
  const randomFilm = jsonFilms[Math.floor(Math.random() * jsonFilms.length)];
  return (
    <div
      className={`${styles["film"]} ${
        styles[`show-poster-${props.posterStatus}`]
      }`}
    >
      <a
        href={`https://www.imdb.com/title/${randomFilm.imdbid}`}
        target="_blank"
        rel="noreferrer"
      >
        <h3>{randomFilm.title}</h3>
        {props.posterStatus ? (
          <img src={randomFilm.poster} alt={`${randomFilm.title} Poster`} />
        ) : null}
      </a>
    </div>
  );
};

export default Film;
