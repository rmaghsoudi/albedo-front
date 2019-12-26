import React from "react";

const JournalEntry = (entry) => {

  return(
    <div>
      <h4>{entry.createdDate}</h4>
      <p>{entry.content}</p>
    </div>
  )

}

export default JournalEntry