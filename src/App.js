import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Home from "./pages/home/Home";
import { Landing } from "./pages/landing/Landing";
import Login from "./pages/landing/Login";
import Signup from "./pages/landing/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
