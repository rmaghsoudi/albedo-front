import React, { useState } from "react";
import AddExerciseResults from "./AddExerciseResults";
import ReadExerciseResults from "./ReadExerciseResults";
import ShowExercise from "./ShowExercise";
import ExerciseSelection from "./ExerciseSelection";

const exercises = [
  {name: "thot destroyer", description: "write down an irrational thought then write a rational response for each", columns: ["irrational thought", "rational rebuttal"], rows: ["input", "textarea"]},
  {name: "reflections", description: "write down thoughts to reflect on each", columns: ["thought", "reflection", "intrusive thought?"], rows: ["input", "textarea", "textarea"]}
]

const Exercise = () => {
  const [showExercise, setShowExercise] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleClick = (e) => {
    if (e.target.tagName === "BUTTON") {
      setSelectedExercise(null)
      setShowExercise(false)
    } else {
      let id = null
      e.target.id ? id = e.target.id : id = e.target.parentElement.id ;
      setSelectedExercise(exercises[id])
      setShowExercise(true)
    }
  }

  return(
    <div>
      I'm the Exercise Page

      {/* TODOS
      - ShowExercises should show all of the exercises available to choose from
      - Clicking an exercise should render an AddExerciseResults component for that specific exercise
      - ReadExerciseResults should render all submitted entries for that specific exercise  */}
      { showExercise ? <ShowExercise exercise={selectedExercise} handleClick={handleClick} /> : <ExerciseSelection exercises={exercises} handleClick={handleClick} /> }
      <AddExerciseResults></AddExerciseResults>
      <ReadExerciseResults></ReadExerciseResults>
    </div>
  )

}

export default Exercise