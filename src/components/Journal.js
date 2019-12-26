import React from "react";
import AddJournalEntry from "./AddJournalEntry";
import ReadJournalEntries from "./ReadJournalEntries";

const dummyData = {
  createdDate: Date.now,
  content: "My name is Kira Yoshkage, I am 33 years old. I live on the outskirts of town. I get off work at 5PM and come home to dinner. Before bed, I have a glass of milk and do 20 minutes of stretches. I always make sure to get 8 hours of sleep. No matter what."
}

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