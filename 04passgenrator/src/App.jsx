import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numInclude, setInclude] = useState(false);
  const [charAllow, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //ref hook

  const passwordRef = useRef(null);
  /* 
useCallback comes in handy. It memoizes the function, meaning it returns the same function instance unless its dependencies change
*/
  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numInclude) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_+{}:";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numInclude, charAllow, setPassword]);

  const copyPass = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password); //copying password to the clipbord
  }, [password]);

  useEffect(() => {
    passwordGenrator();
  }, [length, numInclude, charAllow, passwordGenrator]);

  return (
    <>
      <div className="w-full  max-w-md mx-auto shadow-md  rounded-lg px-4 py-4 my-8 text-orange-400 bg-slate-500">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPass}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numInclude}
              id="numberInput"
              onChange={() => {
                setInclude((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
