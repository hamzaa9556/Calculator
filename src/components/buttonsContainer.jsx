import styles from "./buttonsContainer.module.css";
function Buttons({ onClickButton }) {
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
<<<<<<< HEAD
          className={`${styles.button}
           
          `}
          onClick={() => onClickButton(buttonName)}
=======
          className={`${styles.button} ${
            buttonName === "0" ? styles.zero : ""
          }`}
>>>>>>> 08576beecb1b82fd99568aed38a902ccb295f507
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
}
export default Buttons;
