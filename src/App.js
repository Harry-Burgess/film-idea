import React, { useState } from "react";
import styles from "./App.module.scss";
import Film from "./Components/Film/Film";

const App = () => {
  const [randomKey, setRandomKey] = useState(10);
  const shuffleHandler = () => {
    console.log("Shuffle");
    setRandomKey(Math.floor(Math.random() * 999));
  };
  return (
    <div className={styles["App"]}>
      <p>Yeah so I'm writing this screenplay, </p>
      <div className={styles["content-wrapper"]}>
        <p>it's like</p>
        <Film key={randomKey + 1} />
        <p>meets</p>
        <Film key={randomKey - 1} />
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
