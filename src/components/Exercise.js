import React from "react";
import AddExerciseResults from "./AddExerciseResults";
import ReadExerciseResults from "./ReadExerciseResults";
import ShowExercises from "./ShowExercises";

const Exercise = () => {

  return(
    <div>
      I'm the Exercise Page
      {/* TODOS
      - ShowExercises should show all of the exercises available to choose from
      - Clicking an exercise should render an AddExerciseResults component for that specific exercise
      - ReadExerciseResults should render all submitted entries for that specific exercise  */}
      <ShowExercises></ShowExercises>
      <AddExerciseResults></AddExerciseResults>
      <ReadExerciseResults></ReadExerciseResults>
    </div>
  )

}

export default Exercise