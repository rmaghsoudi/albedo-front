import React from "react";
import AddJournalEntry from "./AddJournalEntry";
import ReadJournalEntries from "./ReadJournalEntries";

const Journal = () => {

  return(
    <div>
      I'm the Journal Page
      <AddJournalEntry></AddJournalEntry>
      <ReadJournalEntries></ReadJournalEntries>
    </div>
  )

}

export default Journal