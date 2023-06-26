import { Nav, Home, Admin } from "./components";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Admin /> */}
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
