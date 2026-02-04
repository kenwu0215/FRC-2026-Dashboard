import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useEffect } from "react";
import "./App.css";
import Gyro from "./components/Gyro";

function App() {
 
    return (
      <div>        
        <Gyro angle={0} size={300}/>
      </div>

    );
}

export default App;
