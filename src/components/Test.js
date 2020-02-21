import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";

const questions = [
  "Will you eat the senbei?",
  "Will my parking pass work today?",
  "Will the weather clear up?"
]

const Test = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const { getTokenSilently } = useAuth0();
  const { loading, user } = useAuth0();

  const handleSubmit = (e) => {
    e.preventDefault();
    let score = 0;
    questions.forEach((q) => {
      const row = "row" + questions.indexOf(q)
      score += +e.target[row].value
    });
    addTest({
      score,
      auth0Id: user.sub
    })
  }

  const addTest = async (formData) => {
    try {
      const token = await getTokenSilently();

      const response = await fetch("/api/test", {
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
        <table>
          <tbody>
            <tr>
              <td>Question</td>
              <td>Major Disagree</td>
              <td>Minor Disagree</td>
              <td>Major Agree</td>
              <td>Minor Agree</td>
            </tr>
            { questions.map((q) => {
              const row = "row" + questions.indexOf(q)
                return(
                <tr key={row}>
                  <td>{q}</td>
                  <td><input type="radio" name={row} value="1" /></td>
                  <td><input type="radio" name={row} value="2" /></td>
                  <td><input type="radio" name={row} value="3" /></td>
                  <td><input type="radio" name={row} value="4" /></td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <button type="submit" >Submit</button>
      </form>
      <h1>Submission Results</h1>
      {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
    </div>
  )

}

export default Test;