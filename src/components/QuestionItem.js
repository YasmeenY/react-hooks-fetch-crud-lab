import React from "react";

function QuestionItem({ question, onHandleDelete, onHandleChange }) {
  const QuestionsUrl = "http://localhost:4000/questions";
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(){
    fetch(`${QuestionsUrl}/${question.id}`, {
      method: "DELETE",
    })
    .then(r=>r.json())
    .then(()=> onHandleDelete(question))
  }

  function handleChange(e) {
    fetch(`${QuestionsUrl}/${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        'correctIndex': e.target.value
      })
    })
      .then(res => res.json())
      .then(() => onHandleChange(question))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={(e)=>handleChange(e)}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
