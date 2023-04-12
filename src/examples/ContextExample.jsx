import { useState, useContext, createContext } from "react";

const ExampleContext = createContext();

const ContextExample = () => {
  const [message, setMessage] = useState("Greetings");

  return (
    <ExampleContext.Provider value={{ message, setMessage }}>
      <div className="example" style={{ background: "pink" }}>
        <h1>Example of useContext hook</h1>
        <p>{message}, this is the parent component</p>
        <ChildComponent />
      </div>
    </ExampleContext.Provider>
  );
};

const ChildComponent = () => {
  return (
    <div style={{ background: "lightblue" }}>
      <p>This is a child component</p>
      <AnotherChildComponent />
    </div>
  );
};

const AnotherChildComponent = () => {
  const { message, setMessage } = useContext(ExampleContext);

  return (
    <div style={{ background: "skyblue" }}>
      <p>This is another child component inside the child component</p>
      <div className="example-container">
        <p>Parent Component's message: {message}</p>
        <button onClick={() => setMessage("Hello again")}>
          Change Message
        </button>
      </div>
    </div>
  );
};

export default ContextExample;
