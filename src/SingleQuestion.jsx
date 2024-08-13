import { useState } from "react";

const SingleQuestion = ({id, title, info, selectedQuery, setActiveId, activeId}) => {
 const [toggleQuestion, setToggleQuestion] =  useState(true);
 const [toggleAnswer, setToggleAnswer] =  useState(false);
 const displayAnswer = (id) => {
    setToggleAnswer(!toggleAnswer);
  }
  


  return (
    <div>
     {selectedQuery.id === id &&
     <article key={id}>
      <h4>{title}</h4>
      {toggleAnswer && <p>{info}</p>}
      <button className="btn" onClick={() => displayAnswer(id)}>Display Answer</button>
     </article>
     }
    {/* } */}
    </div>
  )
}
export default SingleQuestion