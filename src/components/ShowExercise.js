import React from "react";

const ShowExercise = (props) => {

  const createInput = (inputName) => {
    if (inputName === "input") {
      return <input type="text" />
    } else if (inputName === "textarea") {
      return <textarea />
    } else {
      console.log("Invalid form input name");
    }
  }

  return(
    <div>
      <h3>{props.exercise.name}</h3>
      <form>
        <table border="1">
          <tbody>
            <tr>
              {props.exercise.columns.map((col) => {
                return(
                  <td>{col}</td>
                )
              })}
            </tr>
            <tr>
              {props.exercise.rows.map((row) => {
                return(
                  <td>{createInput(row)}</td>
                )
              })}
            </tr>
          </tbody>
        </table>
      </form>
      <button onClick={props.handleClick}>GO BACK</button>
    </div>
  )

}

export default ShowExercise;