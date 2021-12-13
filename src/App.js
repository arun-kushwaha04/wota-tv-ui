import React from "react";
import { Route, Routes } from "react-router-dom";
import Leaderboard from "./Components/Leaderboard/Leaderboard";
import Error from "./Components/Error/Error";

const App = () => {
  return (  
    <div className="App">
      <Routes>       
        <Route path="/" element={<Leaderboard />}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
