import styles from "./App.module.css";
import Disply from "./components/Disply";
import Buttons from "./components/buttonsContainer";
function App() {
  return (
    <center>
      <div className={styles.Calculator}>
        <Disply></Disply>
        <Buttons></Buttons>
      </div>
    </center>
  );
}
export default App;
