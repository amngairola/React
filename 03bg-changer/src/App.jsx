import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=" flex  flex-wrap justify-center gap-3 shadow-xl bg-white 2 rounded-lg px-3 py- ">
          <button
            onClick={() => setColor("red")}
            /* 
            bcz in js we write onClick = "function()"
           If you write it as onClick={(setColor("red")}, it will not work as intended in React.
          In React's JSX syntax, the onClick attribute expects a function reference, not the result of a function call. When you write onClick={(setColor("red")}, you are actually calling the setColor function immediately when the component renders, not when the click event occurs.
          
          -> When you write onClick={(setColor("red")}, it's not exactly calling the setColor function immediately during the rendering phase. Instead, it's attempting to set the onClick handler to the result of calling setColor("red"). However, since setColor("red") is a function call and not a function reference, it won't work as intended.
In contrast, when you use onClick={() => setColor("red")}, you're providing a function reference to the onClick event, which will then be executed when the actual click event occurs

2->f you use onClick={(setColor)}, you are passing the setColor function as a reference to the onClick event. This is a valid and common approach in React, especially when you want to pass a function that updates state to an event handler.
const MyComponent = () => {
  const [color, setColor] = useState("blue");

  const handleButtonClick = () => {
    setColor("red");
  };

  return (
    <button onClick={handleButtonClick}>Change Color</button>
  );
};
          
            */
            className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
