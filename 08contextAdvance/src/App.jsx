import { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/Theam";
import TheamButton from "./Components/TheamButton";
import Card from "./Components/Card";

function App() {
  const [theamMode, setTheamMode] = useState("light");
  const lightTheam = () => {
    setTheamMode("light");
  };
  const darkTheam = () => {
    setTheamMode("dark");
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(theamMode);
  }, [theamMode]);

  return (
    <ThemeProvider value={{ theamMode, lightTheam, darkTheam }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <TheamButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
