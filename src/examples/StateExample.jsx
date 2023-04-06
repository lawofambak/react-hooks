import { useState } from "react";

const StateExample = () => {
  const [color, setColor] = useState("blue");
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({ a: "a", b: "b", c: "c" });

  const changeColor = () => {
    setColor(color === "blue" ? "magenta" : "blue");
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const changeProperty = () => {
    setObj((prevObj) => ({
      ...prevObj,
      a: prevObj.a === "a" ? "z" : "a",
    }));
  };

  return (
    <div className="example">
      <h1>Example of useState hook</h1>
      <div className="example-container">
        <p style={{ color: color }}>This text color is {color}</p>
        <button onClick={changeColor}>Change Color</button>
      </div>
      <div className="example-container">
        <p>The count is {count}</p>
        <button onClick={incrementCount}>Increment by 2</button>
      </div>
      <div className="example-container">
        <p>
          The object's properties are {obj.a}, {obj.b}, and {obj.c}
        </p>
        <button onClick={changeProperty}>Change Property</button>
      </div>
    </div>
  );
};

export default StateExample;
