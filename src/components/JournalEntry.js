import React from "react";

const JournalEntry = (props) => {

  return(
    <div id={props.entry._id}>
      <h4>{props.entry.createdDate}</h4>
      <p>{props.entry.content}</p>
    </div>
  )

}

export default JournalEntry