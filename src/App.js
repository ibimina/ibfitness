import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import useAuthContext from "./hooks/useAuthContext";
import Home from "./pages/home/Home";
import { Landing } from "./pages/landing/Landing";
import Login from "./pages/landing/Login";
import Signup from "./pages/landing/Signup";
import Registration from "./pages/registration/Registration";


function App() {
  const {user,authChanged}=useAuthContext()
  return (
    <div className="App">
      {authChanged && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route

              path="/ibfitness"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/registration"
              element={user ? <Registration /> : <Navigate to="/signup" />
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
              element={user ? <Navigate to="/registration" /> : <Signup />}

              element={user ? <Navigate to="/registerpageone" /> : <Signup />}
              
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

