import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import words from '../data/words.json'

function App() {
  const [puzzle, setPuzzle] = useState(words[getRandomWord()])
  const [guessedLetters, setGuessedLetters] = useState([])
  // const [availableLetters, setAvailableLetters] = useState("abcdefghijklmnopqrstuvwxyz".split(""))
  const [availableLetters, setAvailableLetters] = useState("abcdefghijklmnopqrstuvwxyz")

  function getRandomWord() {
    return Math.floor(Math.random() * words.length);
  }

  // const availableLetters = "abcdefghijklmnopqrstuvwxyz".split("")
  const clickHandler = () => {

    const maskedWord = () => {

      let returnValue = ""
      for (let char of puzzle) {
        returnValue += "_"
      }
    }

    let guessedLetter = document.getElementById('guess').value

    if(guessedLetter.length !== 1) {
      window.alert("Please enter a single letter")
    } 

    console.log(availableLetters)

    if (puzzle.includes(guessedLetter)) {
      let target = availableLetters.indexOf(guessedLetter)
      // availableLetters.splice(target, 1)
      setAvailableLetters(prevAvailableLetters => prevAvailableLetters.replace(guessedLetter, ""))
      console.log(availableLetters)
    }
    
    // console.log(variable.value)
    
  }

  

    
  

  return (
    <div className="App">
      <h2>Available letters: {availableLetters}</h2>
      <input id="guess" type='text' placeholder='Guess a letter' />
      <button onClick={clickHandler}>Guess</button>
      <h2>Your word: {puzzle}</h2>
    </div>
  )
}

export default App
