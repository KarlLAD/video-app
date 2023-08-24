
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./Detail";
import Liste from "./Liste";

function App() {


  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Routes>
        <Route path="/" element={<Liste/>} /> 
        <Route path="/detail" element={<Detail/>} />


      </Routes>
      
    </>
  );
}

export default App;
