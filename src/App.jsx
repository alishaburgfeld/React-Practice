import { useState } from 'react'
import './App.css'
import words from '../data/words.json'
import UserInput from './components/UserInput'
import GuessedWord from './components/GuessedWord'

const answer = words[Math.floor(Math.random() * words.length)]
  

function App() {
  const [puzzle, setPuzzle] = useState(()=>{
  let allUnderscores = ""
    for (let i=0;i<answer.length;i++) {
     allUnderscores += "_"
    }
  return allUnderscores})


  const [availableLetters, setAvailableLetters] = useState("abcdefghijklmnopqrstuvwxyz")
  console.log(`Puzzle at line 13 app.jsx is ${puzzle}`)
  console.log(`answer at line 14 app.jsx is ${answer}`)


  return (
    <div className="App">
      <h2>Available letters: {availableLetters}</h2>
      <UserInput answer={answer} availableLetters= {availableLetters} setAvailableLetters={setAvailableLetters} puzzle={puzzle} setPuzzle={setPuzzle}/>
      <GuessedWord puzzle={puzzle} answer={answer}/>
    </div>
  )
}

export default App
