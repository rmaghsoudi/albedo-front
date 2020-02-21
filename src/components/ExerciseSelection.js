import React from "react";

const ExerciseSelection = (props) => {

  return(
    <div>
      {props.exercises.map((ex) => {
        return(
          <div style={{borderStyle: "solid"}} key={props.exercises.indexOf(ex)} id={props.exercises.indexOf(ex)} onClick={props.handleClick}>
            <h3>{ex.name}</h3>
            <p>{ex.description}</p>
          </div>
        )
      })}
    </div>
  )

}

export default ExerciseSelection