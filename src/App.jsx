import { useState } from 'react'
import './App.css'
import words from '../data/words.json'

function App() {
  const [puzzle, setPuzzle] = useState("")
  const [availableLetters, setAvailableLetters] = useState("abcdefghijklmnopqrstuvwxyz")

  const answer = words[getRandomWord()]

  function getRandomWord() {
    return Math.floor(Math.random() * words.length);
  }

  const clickHandler = () => {

    console.log(answer)


    let allUnderscores = ""
    let workingWord = ""
    
    for (let char of answer) {
      allUnderscores += "_  "
      workingWord += "_"
    }


    setPuzzle(allUnderscores)
    

    let guessedLetter = document.getElementById('guess').value

    if(guessedLetter.length !== 1) {
      window.alert("Please enter a single letter")
    } 

    console.log(availableLetters)

    
    if (answer.includes(guessedLetter)) {
      setAvailableLetters(prevAvailableLetters => prevAvailableLetters.replace(guessedLetter, ""))
      console.log(availableLetters)
      
    }
    
    
  }
  
  function updateWord(word, letter) {
    let updatedWord = ""

    for (let i = 0; i < word.length; i++) {

      if(word[i] == letter) {
        updatedWord += word[i]
      } else {
        updatedWord += "_"
      }
    }

    return updatedWord
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
