import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";

const AddJournalEntry = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const { getTokenSilently } = useAuth0();
  const { loading, user } = useAuth0();

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry({
      content: e.target.content.value,
      auth0Id: user.sub
    });
  }

  const addEntry = async (formData) => {
    try {
      const token = await getTokenSilently();

      const response = await fetch("/api/entry", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData)
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="content">C O N T E N T:</label>
        <br />
        <textarea name="content" id="content"></textarea>
        <button type="submit" >Submit</button>
      </form>
      <h1>Submission Results</h1>
      {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
    </div>
  )

}

export default AddJournalEntry