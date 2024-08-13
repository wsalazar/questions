import { useState } from "react";
import questions from "./data";
import SingleQuestion from "./SingleQuestion";

const App = () => {
  const [queries, setQueries] = useState(questions)
  const [activeId, setActiveId] = useState(null)
  const [selectedQuery, setSelectedQuery] = useState(queries[0])
  const nextQuestion = () => {
    setSelectedQuery((currentQuery) => {
      var nextIndex = (currentQuery.id-1) + 1;      
      if (currentQuery.id > (queries.length-1)) {
        nextIndex = 0
      }
      return queries[nextIndex]
    })
  }
  return (
    <>
      {queries.map((query) => {
        return <SingleQuestion key={query.id} {...query} selectedQuery={selectedQuery} setActiveId={setActiveId} activeId={activeId}/>
      })}
      <button className="btn" onClick={() => nextQuestion()}>Next question</button>
    </>
  )
  
};
export default App;
