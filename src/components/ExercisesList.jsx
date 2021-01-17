import React, { Component } from "react";
import axios from "axios";
import Exercise from "./Exercise";

class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then((res) => {
        this.setState({ exercises: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteExercise = (id) => {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      exercises: this.state.exercises.filter((e) => e._id !== id),
    });
  };

  exerciseList = () => {
    return this.state.exercises.map((exercise) => (
      <Exercise
        exercise={exercise}
        deleteExercise={this.deleteExercise}
        key={exercise._id}
      />
    ));
  };

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}

export default ExerciseList;
