import React, { useState, useEffect, useRef } from "react";

const RefExample = () => {
  const [message, setMessage] = useState("");

  const previousMessage = useRef("");

  const inputRef = useRef(null);

  const focus = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    previousMessage.current = message;
  }, [message]);

  return (
    <div className="example">
      <h1>Example of useRef hook</h1>
      <div className="example-container">
        <div className="input-container">
          <input ref={inputRef} />
          <input />
          <input />
          <input
            type="text"
            value={message}
            placeholder="Type message here"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button onClick={focus}>Focus</button>
      </div>
      <p>Previous message: {previousMessage.current}</p>
    </div>
  );
};

export default RefExample;
