import "./App.css";
import StateExample from "./examples/StateExample";
import EffectExample from "./examples/EffectExample";
import ContextExample from "./examples/ContextExample";

function App() {
  return (
    <div className="App">
      <StateExample />
      <EffectExample />
      <ContextExample />
      <StateExample />
    </div>
  );
}

export default App;
