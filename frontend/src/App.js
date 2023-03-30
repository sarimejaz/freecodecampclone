
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import SignIn from "./Components/SignIn";
import Login from "./Components/Login";
import Courses from "./Components/Courses";

function App() {


  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Banner />
              </div>
            }
          />
          <Route
            path="/signin"
            element={
              <div>
                <SignIn />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div>
                <Login/>
              </div>
            }
          />
          <Route
            path="/courses"
            element={
              <div>
                <Courses />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
