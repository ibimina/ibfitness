import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
// import Home from "./pages/home/Home";
import { Landing } from "./pages/landing/Landing";
import Login from "./pages/landing/Login";
import Signup from "./pages/landing/Signup";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Routes>
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
