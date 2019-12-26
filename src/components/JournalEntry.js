import React, {useState} from "react";
import { useAuth0 } from "../react-auth0-spa";

const JournalEntry = (props) => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const { getTokenSilently } = useAuth0();

  const deleteEntry = async (entryId) => {
    try {
      const token = await getTokenSilently();

      const response = await fetch(`/api/entry/${entryId}`, {
        method: "DELETE",
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
    <div id={props.entry._id}>
      <h4>{props.entry.createdDate}</h4>
      <p>{props.entry.content}</p>
      <button>Edit</button>
      <button onClick={(e) => deleteEntry(e.target.parentElement.id)}>Delete</button>
      {showResult && <code>{JSON.stringify(apiMessage)}</code>}
    </div>
  )

}

export default JournalEntry