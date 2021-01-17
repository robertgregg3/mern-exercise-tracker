import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import EditExercise from "./components/EditExercise";
import ExercisesList from "./components/ExercisesList";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    // :id is the mongoDB Object ID.
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
