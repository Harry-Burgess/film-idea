import React, { useState } from "react";
import styles from "./App.module.scss";
import Film from "./Components/Film/Film";
import PosterToggle from "./Components/PosterToggle/PosterToggle";

const App = () => {
  const [randomKey, setRandomKey] = useState(10);
  const [posterToggle, setPosterTogle] = useState(false);
  const shuffleHandler = () => {
    console.log("Shuffle");
    setRandomKey(Math.floor(Math.random() * 999));
  };
  const posterToggleChangeHandler = () => {
    setPosterTogle(() => {
      return !posterToggle;
    });
    console.log(posterToggle);
  };
  return (
    <div className={styles["App"]}>
      <PosterToggle posterToggleChange={posterToggleChangeHandler} />
      <p>Yeah so I'm writing this screenplay, </p>
      <div className={styles["content-wrapper"]}>
        <p>it's like</p>
        <Film key={randomKey + 1} posterStatus={posterToggle} />
        <p>meets</p>
        <Film key={randomKey - 1} posterStatus={posterToggle} />
      </div>
      <img
        className={styles["shuffle-icon"]}
        src="/shuffle.svg"
        alt="Shuffle icon"
        onClick={shuffleHandler}
      />
    </div>
  );
};

export default App;
