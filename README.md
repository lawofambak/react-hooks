# React Hooks Practice

## What are hooks?

Hooks in React basically allow for function components to have access to state and other React features like lifecycle methods.
React has various built-in hooks, but you can also create your own custom hooks.

## Rules of Hooks

1. Can only be called within React function components
2. Can only be called at the top level of a component
3. Cannot be called inside conditions

---

## useState

Allows you to add state to a component. It returns an array with two values: the current state and a function to update the state. Update state using the state setting function.

```
import { useState } from "react";
```

### Intialization

```
const [someState, setSomeState] = useState("defaultValue");
```

### Updating Objects and Arrays

Whenever state is updated, the entire state gets overwritten so you would have to use
the spread operator to update objects and arrays.

```
setState(previousState => ({
  ...previousState,
  property: property,
}));
```

### State Updater Function

React may batch multiple state updates together for performance reasons so if you are
relying on a previous state value to calculate a new state value, you should use the
state updater function.

```
setState(previousState => previousState + 1);
```

---

## useEffect

Allows you to perform side effects in your components such as fetching data, timers, and etc. It takes two arguments: a function that performs the effect and a
an optional array of dependencies. It is to note that useEffect runs on every render. Additionally, some effects require cleanup to reduce memory leaks, slow performance,
or unexpected behaviors. You can cleanup by including a return function at the end of the hook.

```
import { useEffect } from "react";
```

### Initialization

```
useEffect(() =>
  // Logic
  // goes
  // here
, [optionalDependencies]);
```

### No Dependency

This will run on every render.

```
useEffect(() => {
  // Logic
});
```

### Empty Array

This will only run on the first render.

```
useEffect(() => {
  // Logic
}, []);
```

### Dependencies

This will run on the first render and any time any dependency values change.

```
useEffect(() => {
  // Logic
}, [value1, value2]);
```

### Effect Cleanup

Some things to clean up in an effect are timeouts, event listeners, subscriptions, and etc.

```
useEffect(() => {
  // Event logic

  window.addEventListener(...);

  return () => {
    window.removeEventListener(...);
  }
}, []);
```

---

## useContext

Allows you to consume data without using a higher-order component or through props which
is also known as "prop drilling". It is basically a convenient way to share data across
multiple (even nested) components.

```
import { createContext, useContext } from "react";
```

### Initialization

You first need to create a context in order for it to be used elsewhere in your application. The optional argument in "createContext()" is essentially the default value that is provided when you use the context with no provider.

```
const CreatedContext = createContext();
```

### Usage

In order to use this context within a component, you just need to use the "useContext" hook.

```
const ContextValue = useContext(CreatedContext);
```

Additionally, you need to wrap the tree of components that will use this context with a context provider that has a value prop. This value prop can take an object and not just a single value.

```
<CreatedContext.Provider value={value}>
  <ComponentOne />
  <ComponentTwo />
</CreatedContext.Provider>
```

---

## useRef

Allows you to create presisted mutuable values between renders and also access DOM elements directly.

```
import { useRef } from "react";
```

### Initialization

To use the hook, you can just call the hook with one argument as the initial value. This then returns an object that has the special property of _current_ that can be used to access the reference value.

```
const someReference = useRef(initialValue);
```

### Usage

To use the referenced value in your component, you just need to use that variable. For example, you can use it to access DOM elements directly by creating a reference to the element with the _ref_ attribute.

```
const elementRef = useRef(null);

console.log(elementRef.current); // Will log out the referenced DOM element
```

You can also use it to keep count of how many times a component rendered.

```
const renderCount = useRef(1);

useEffect(() => {
  renderCount.current = renderCount.current + 1;
});
```
