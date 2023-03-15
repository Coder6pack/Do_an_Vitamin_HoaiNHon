import NavBar from "./components/NavBar/NavBar";
import NavBarHeader from "./components/NavBar/NavBarHeader";
import "./App.scss";
import HomePage from "./components/Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavBar />
      <NavBarHeader />
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
