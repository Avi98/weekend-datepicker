import reactLogo from "./assets/react.svg";
import "./App.css";
import DateRangePicker from "./components/DateRangePicker";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h3>React date-picker</h3>
      </div>
      <DateRangePicker
        inputSeparator="~"
        formate="dd-mm-yyyy"
        // placeholder="Weekend DatePicker"
      />
    </>
  );
}

export default App;
