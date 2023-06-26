import { Nav, Landing, Admin, Home, Message, Inbox } from "./components";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Admin /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/message" element={<Message />} />
        <Route path="/inbox" element={<Inbox />} />
      </Routes>
    </>
  );
}

export default App;
