import styles from "./Disply.module.css";
const Display = ({ displyValue }) => {
  return (
    <input
      className={styles.disply}
      type="text"
      value={displyValue || ""}
      readOnly
    />
  );
};
export default Display;
