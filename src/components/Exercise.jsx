import React from "react";
import { Link } from "react-router-dom";

const Exercise = ({
  exercise,
  username,
  description,
  duration,
  date,
  deleteExercise,
}) => {
  return (
    <tr>
      <td>{username}</td>
      <td>{description}</td>
      <td>{duration}</td>
      <td>{date}</td>
      <td>
        <Link to={"/edit/" + exercise._id}>edit</Link> |{" "}
        <a
          href="#"
          onClick={() => {
            deleteExercise(exercise._id);
          }}>
          delete
        </a>
      </td>
    </tr>
  );
};

export default Exercise;
