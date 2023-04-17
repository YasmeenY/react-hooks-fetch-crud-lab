import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  function handleFormSubmit() {
    setPage('List')
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
      <QuestionForm handleFormSubmit={handleFormSubmit}/> 
      : 
      <QuestionList />}
    </main>
  );
}

export default App;
