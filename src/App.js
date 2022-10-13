import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import useAuthContext from "./hooks/useAuthContext";
import Home from "./pages/home/Home";
import { Landing } from "./pages/landing/Landing";
import Login from "./pages/landing/Login";
import Signup from "./pages/landing/Signup";
import RegisterPageTwo from "./pages/profile/Profile";

function App() {
  const {user,authChanged}=useAuthContext()
  return (
    <div className="App">
      {authChanged && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/home"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/registerpageone"
              element={user ? <RegisterPageTwo /> : <Navigate to="/signup" />}
            />
            <Route
              path="/login"
              element={user ? <Navigate to="/home" /> : <Login />}
            />
            <Route
              path="/signup"
              element={user ? <Navigate to="/registerpageone" /> : <Signup />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

