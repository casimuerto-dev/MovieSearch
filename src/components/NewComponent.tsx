import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { NewGrandChild } from "./NewGrandChild";

interface NewComponentProps {
  label: string;
  parentStateAndChange: {
    state: number;
    change: Dispatch<SetStateAction<number>>;
  };
  children?: ReactNode[];
}

const NewComponent = (props: NewComponentProps) => {
  const [text, setText] = useState("hello");
  const { state, change } = props.parentStateAndChange;
  useEffect(() => {
    setTimeout(() => {
      setText(text + " again");
      change(10);
    }, 2000);
  }, []);

  return (
    <>
      <div className="mainContainer">
        <p className="textDisplay">{text}</p>
        <p className="textDisplay">{props.label}</p>
        {props.children}
      </div>

      <button className="button" onClick={() => change(state - 1)}>
        Subtract One
      </button>
      <div>
        <NewGrandChild />
      </div>
    </>
  );
};

export { NewComponent };
