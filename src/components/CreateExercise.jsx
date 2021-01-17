import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

class CreateExercises extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/users/").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map((user) => user.username),
          username: response.data[0].username,
        });
      }
    });
  }

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  onChangeDescription = (e) => {
    this.setState({ description: e.target.value });
  };
  onChangeDuration = (e) => {
    this.setState({ duration: e.target.value });
  };
  onChangeDate = (date) => {
    this.setState({ date: date });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };

    console.log(exercise);
    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => console.log(res.data));

    window.location = "/";
  };

  render() {
    return (
      <div>
        <h3>Create New Exercise</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duration (in mins):</label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date" className="mr-2">
              Date:
            </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
                className="border p-2 rounded"
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create exercise log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateExercises;
