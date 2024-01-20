import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("pink");

  return (
    <>
      <div
        className="w-full h-screen duration-150"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className=" px-4 py-1 rounded-full text-black"
              style={{backgroundColor:'red'}}
            >Red</button>
             <button
              onClick={() => setColor("green")}
              className=" px-4 py-1 rounded-full shadow-lg text-black"
              style={{backgroundColor:'green'}}
            >Green</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
