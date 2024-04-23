import React from "react";
import { useReducer } from "react";
interface State {
  count: number;
}
interface Action {
  type: string;
}

const Count = () => {
  const countReducer = (state: State, action: Action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decurement":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  };
  const x = { count: 0 };
  console.log(x);
  const [state, despatch] = useReducer(countReducer, x);
  console.log(state);

  return (
    <div>
      <p>{state.count}</p>
      <button
        className="border rounded-md"
        onClick={() => despatch({ type: "increment" })}
      >
        add+
      </button>
      <button className="w-" onClick={() => despatch({ type: "decurement" })}>
        minus-
      </button>
    </div>
  );
};

export default Count;
