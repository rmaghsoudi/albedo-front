import React, { useState } from "react";
import JournalEntry from "./JournalEntry";
import { useAuth0 } from "../react-auth0-spa";

const ReadJournalEntries = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const { getTokenSilently } = useAuth0();
  const { loading, user } = useAuth0();

  const getEntries = (e) => {
    e.preventDefault();
    getUserEntries(user.sub);
  }

  const getUserEntries = async (auth0Id) => {
    try {
      const token = await getTokenSilently();

      const response = await fetch(`/api/entry?auth0Id=${auth0Id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }
      });

      const responseData = await response.json();

      setShowResult(true);
      setApiMessage(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return(
    <div>
      <button onClick={getEntries} >Show my entries</button>
      <h1>Your Journal Entries</h1>
      {showResult && apiMessage ?
        <div>{apiMessage.map(entry => {
          return(
            <JournalEntry entry={entry} key={entry._id} />
          )
        })}</div> : null
      }
    </div>
  )

}

export default ReadJournalEntries