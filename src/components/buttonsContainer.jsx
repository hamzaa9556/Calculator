import styles from "./buttonsContainer.module.css";
function Buttons() {
  let buttonsName = [
    "AC",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonsName.map((buttonName, index) => (
        <button
          key={index}
          className={`${styles.button} ${
            buttonName === "0" ? styles.zero : ""
          }`}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
}
export default Buttons;
