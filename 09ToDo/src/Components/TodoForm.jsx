import React, { useState } from "react";
import { useTodo } from "../Context/Context";

function TodoForm() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();
  // in the above line what we are doing is we are extracting the addTodo functionality from the useTodo hook , which is returning the Context

  //adding todo
  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false }); //if you have an object with a key-value pair like {todo: todo}, you can shorthand it to just {todo}.

    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit" //beacuse of type submite we do not have to add functionality to the button we can directly to that in a form tag
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
