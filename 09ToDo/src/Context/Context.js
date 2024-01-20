import { createContext, useContext } from "react";

export const Context = createContext({
  //CREATE CONTEXT
  // values
  todos: [{ id: 1, todo: "todo MEssage", completed: false }],

  //functionalitys , defination will be provided at App component
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

//creating a hook to use the context
export const useTodo = () => {
  return useContext(Context); // In React, useContext is a hook that allows functional components to subscribe to React context without introducing nesting.
};

export const TodoProvider = Context.Provider; //CONTEXT PROVIDER
