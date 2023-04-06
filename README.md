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
