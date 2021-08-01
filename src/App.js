import { useState } from "react";

import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [currentValue, setCurrentValue] = useState(0);
  const [operator, setOperator] = useState("");
  const [calcFinished, setCalcFinished] = useState(false);

  const handleClick = (e) => {
    setValue((prev) => prev + e.target.value);
  };

  const operate = (e) => {
    setOperator(e.target.value);
    if (calcFinished) {
      setValue("");
      setCalcFinished(false);
      return;
    }
    setCurrentValue((prev) => prev + parseFloat(value));
    setValue("");
  };

  const equals = (e) => {
    if (operator === "+") {
      setValue(parseFloat(value) + currentValue);
      setCurrentValue(parseFloat(value) + currentValue);
    }

    if (operator === "-") {
      setValue(currentValue - parseFloat(value));
      setCurrentValue(currentValue - parseFloat(value));
    }
    if (operator === "*") {
      setValue(currentValue * parseFloat(value));
      setCurrentValue(currentValue * parseFloat(value));
    }
    if (operator === "/") {
      setValue(currentValue / parseFloat(value));
      setCurrentValue(currentValue / parseFloat(value));
    }
    setCalcFinished(true);
  };

  const clear = () => {
    setValue("");
    setOperator("");
    setCurrentValue(0);
    setCalcFinished(false);
  };
  return (
    <div className="App">
      <div className="titleContainer">
        <h1>React Calculator App</h1>
      </div>
      <div className="calcContainer">
        <div className="inputContainer">
          <input type="number" name="answers" id="answers" value={value} />
        </div>
        <table>
          <tr>
            <td>
              <input type="button" onClick={(e) => handleClick(e)} value="1" />
            </td>
            <td>
              <input type="button" onClick={(e) => handleClick(e)} value="2" />
            </td>

            <td>
              <input type="button" onClick={(e) => handleClick(e)} value="3" />
            </td>
            <td>
              <input type="button" onClick={(e) => operate(e)} value="*" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" onClick={(e) => handleClick(e)} value="4" />
            </td>
            <td>
              <input type="button" onClick={(e) => handleClick(e)} value="5" />
            </td>
            <td>
              <input type="button" onClick={(e) => handleClick(e)} value="6" />
            </td>
            <td>
              <input type="button" onClick={(e) => operate(e)} value="/" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" onClick={(e) => handleClick(e)} value="7" />
            </td>
            <td>
              <input type="button" onClick={(e) => handleClick(e)} value="8" />
            </td>
            <td>
              <input type="button" onClick={(e) => handleClick(e)} value="9" />
            </td>
            <td>
              <input type="button" onClick={(e) => operate(e)} value="-" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" onClick={(e) => handleClick(e)} value="0" />
            </td>
            <td>
              <input type="button" onClick={() => clear()} value="clr" />
            </td>
            <td>
              <input type="button" onClick={(e) => equals(e)} value="=" />
            </td>
            <td>
              <input type="button" onClick={(e) => operate(e)} value="+" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
