import { useState } from "react";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";
import { Provider } from "react-redux";
import { Store } from "./App/Store";
function App() {
  return (
    <Provider store={Store}>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;
