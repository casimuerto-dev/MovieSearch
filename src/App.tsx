import { useEffect, useState } from "react";
import "./App.css";
import { countContext } from "./components/context/context";
import { NewGrandChild } from "./components/NewGrandChild";
import { NewComponent } from "./components/NewComponent";

function App() {
  const [count, setCount] = useState(0);
  const [somethingElse, setSomethingElse] = useState("hello");
  useEffect(() => {
    console.log("rerender");
  }, [somethingElse]);

  return (
    <>
      <countContext.Provider value={{ count }}>
        <div className="mainContainer">
          <p className="textDisplay">{count}</p>
          <button className="button" onClick={() => setCount(count + 1)}>
            add one
          </button>
        </div>
        <div className="mainContainer">
          <input
            className="textInput"
            onChange={(event) => {
              setSomethingElse(event.target.value);
            }}
            value={somethingElse}
          ></input>
          <p className="textDisplay">{somethingElse}</p>
        </div>
        <NewComponent
          label="let's go"
          parentStateAndChange={{ state: count, change: setCount }}
        />
      </countContext.Provider>
    </>
  );
}

export default App;
