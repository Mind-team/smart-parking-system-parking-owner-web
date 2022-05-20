import styles from "./CreateCarNumbers.module.css";

export const CreateCarNumbers = (data) => {
  return <div className={styles.carNumbers}>{data.numbers}</div>;
};
