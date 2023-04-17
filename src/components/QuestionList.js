import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const QuestionsUrl = "http://localhost:4000/questions";
  const [questions, setQuestions] = useState([])

  useEffect(()=>{
    fetch(QuestionsUrl)
    .then(r=>r.json())
    .then(question => setQuestions(question))
  },[])

  function handleDelete(questionToDelete){
    const newList = questions.filter(q => q.id !== questionToDelete.id)
    setQuestions(newList)
  }

  function handleChange(updatedQuestion) {
    const newItems = questions.map(q => q !== updatedQuestion ? q : updatedQuestion)
    setQuestions(newItems)
  }

  const questionItem = questions.map(item => (
    <QuestionItem
      key={item.id}
      question={item}
      onHandleDelete={handleDelete}
      onHandleChange={handleChange}
    />
  ))
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItem}</ul>
    </section>
  );
}

export default QuestionList;
