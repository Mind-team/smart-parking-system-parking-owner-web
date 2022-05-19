import styles from "./CreateParkingsInfo.module.css";

export const CreateParkingsInfo = (data) => {
  return (
    <div className={styles.box}>
      <div className={styles.title}>{data.title}</div> <br />
      <div className={styles.busy}>Занятых мест: {data.busy}</div>
      <button className={styles.detail} onClick={data.click}>
        Подробнее
      </button>
    </div>
  );
};
