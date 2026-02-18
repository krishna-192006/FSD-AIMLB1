import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  async function getData() {
    // alert("Hello from App.jsx");
    const response = await fetch("http://localhost:4007/data");
    const jsondata = await response.json();
    setData(jsondata.msg);
  }
  return (
    <>
      <div className="div">
        <h2>Hello from App.jsx</h2>
        {JSON.stringify(data)}
        <button onClick={getData}>FetchData</button>
      </div>
    </>
  );
}

export default App;