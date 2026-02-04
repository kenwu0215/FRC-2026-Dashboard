import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useEffect } from "react";
import "./App.css";
import Gyro from "./components/Gyro";


function App() {
 
    return (
      <div className="grid grid-cols-3 w-screen h-screen bg-gray-700 p-15">        
        <Gyro angle={-110}/>
      </div>

    );
}

export default App;
