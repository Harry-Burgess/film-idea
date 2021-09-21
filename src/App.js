import styles from "./App.module.scss";
import Film from "./Components/Film/Film";

const App = () => {
  const shuffleHandler = () => {
    console.log("Shuffle");
  };
  return (
    <div className={styles["App"]}>
      <p>Yeah so I'm writing this screenplay, </p>
      <div className={styles["content-wrapper"]}>
        <p>it's like</p>
        <Film />
        <p>
          meets
          <img
            className={styles["shuffle-icon"]}
            src="/shuffle.svg"
            alt="Shuffle icon"
            onClick={shuffleHandler}
          />
        </p>
        <Film />
      </div>
    </div>
  );
};

export default App;
