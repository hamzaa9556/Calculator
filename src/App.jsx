import styles from "./App.module.css";
import Display from "./components/Disply";
import Buttons from "./components/buttonsContainer";
import { useState } from "react";
function App() {
  let [calVal, setCalVal] = useState();
  const onClickButton = (buttonText) => {
    if (buttonText === "AC") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <center>
    <div className={styles.Calculator}>
      <Display displyValue={calVal}></Display>
      <Buttons onClickButton={onClickButton}></Buttons>
    </div>
    </center>
  );
}
export default App;
