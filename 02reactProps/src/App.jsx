import "./App.css";
import Card from "./Components/Card.jsx";
function App() {
  // let obj = {
  //   number: 23,
  // };

  // let arr = [1, 2, 4, 5];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Telwind Test
      </h1>
      {/* <Card name="aman" obj={obj} arr={arr} /> */}
      <Card name="aman" btnText="about me" />
    </>
  );
}

export default App;
