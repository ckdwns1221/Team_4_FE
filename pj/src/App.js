import './App.css';
import Main from "./pages/Main";
import React from "react";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Main/>} />
      </Routes>
    </div>
  );
}

export default App;
