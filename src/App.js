import styles from './App.module.scss';
import Film from "./Components/Film/Film"

const App = () => {
  return (
    <div className={styles["App"]}>
      <div className={styles["content-wrapper"]}>
        <p>Yeah so I'm writing this screenplay, it's like</p>
        <Film />
        <p>meets</p>
        <Film />
      </div>
    </div>
  );
}

export default App;
