import React from "react";
import styles from "./PosterToggle.module.scss";

const PosterToggle = (props) => {
  const posterToggleChangeHandler = () => {
    props.posterToggleChange();
  };
  return (
    <div className={styles["checker-wrapper"]}>
      <p>Posters</p>
      <label className={styles["checker"]}>
        <input
          className={styles["checkbox"]}
          type="checkbox"
          onChange={posterToggleChangeHandler}
        />
        <div className={styles["check-bg"]}></div>
        <div className={styles["checkmark"]}>
          <svg viewBox="0 0 100 100">
            <path
              d="M20,55 L40,75 L77,27"
              fill="none"
              stroke="#FFF"
              strokeWidth="15"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </label>
    </div>
  );
};

export default PosterToggle;
