import { useState, useEffect } from "react";

const EffectExample = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("This is running on every render.");
  });

  useEffect(() => {
    console.log("This only runs on the initial render.");
  }, []);

  useEffect(() => {
    console.log(
      "This runs on the initial render and whenever the count variable changes."
    );
  }, [count]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log(
        "This message has been logged after 5 seconds with a timer. If this component unmounts before the timeout, this message will not be logged."
      );
    }, 5000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className="example">
      <h1>Example of useEffect hook</h1>
      <p>Check browser console for examples</p>
      <div className="example-container">
        <p>The count is {count}</p>
        <button onClick={incrementCount}>Add to Count</button>
      </div>
    </div>
  );
};

export default EffectExample;
