import React from 'react';
import './App.css';
import Start from './components/Start';
import Quizz from './components/Quizz';

export default function App() {
  //Don't forget to fix conditional rendering of Start component!
  const [start, setStart] = React.useState(true);
  function startQuizz() {
    setStart(false);
  }
  return (
    <div className="App">
      {start && <Start handleClick={startQuizz}/>}
      {!start && <Quizz />}
    </div>
  );
}