import styles from './App.module.scss';
import Film from "./Components/Film/Film"

const App = () => {
  return (
    <div className={styles["App"]}>
      <p>Yeah so I'm writing this screenplay, </p>
      <div className={styles["content-wrapper"]}>
        <p>it's like</p>
        <Film />
        <p>meets</p>
        <Film />
      </div>
    </div>
  );
}

export default App;
