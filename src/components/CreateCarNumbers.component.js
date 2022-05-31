import styles from "./CreateCarNumbers.module.css";

export const CreateCarNumbers = (data) => {
  return (
    <button className={styles.carNumbers} onClick={data.click}>
      {data.numbers}
    </button>
  );
};
