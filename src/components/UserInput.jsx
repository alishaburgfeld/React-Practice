import { useState } from 'react'
function UserInput ({answer, setAvailableLetters, availableLetters, puzzle, setPuzzle}) {
    
    const [guesses, setGuesses] = useState([])
    const [counter, setCounter] = useState(0)

    const clickHandler = () => {
        
        // console.log(`guesses at line 6 userinput is ${guesses}`)
        
        let guessedLetter = document.getElementById('guess').value
        if (counter <5) {
            if(guessedLetter.length !== 1) {
            window.alert("Please enter a single letter")
            }
            else {
                setAvailableLetters(prevAvailableLetters => prevAvailableLetters.replace(guessedLetter, ""))
                if (answer.toLowerCase().includes(guessedLetter)) {
                    let newData = [...guesses, guessedLetter]
                    setGuesses(newData)
                // console.log(`Available letters at line 12 in userinput.jsx ${availableLetters}`)
                setPuzzle(updateWord(answer, guessedLetter, guesses))
                }
                else {
                    window.alert(`Sorry, ${guessedLetter} is not in the word! Guess again, you have ${5-counter} guesses left`)
                    setCounter(prevCounter=>prevCounter+1)
                }
            }
        }
        else {
            window.alert(`Sorry you are all out of guesses! The word was ${answer}`)
        }
        // document.getElementById('guess').innerHTML=""      
        // not working
      }
      
      function updateWord(word, letter, current) {
        console.log(`guesses at line 23 userinput is ${guesses}`)
        let updatedWord = ""
        let lowerWord=word.toLowerCase()
        for (let i = 0; i < word.length; i++) {
    

          if(lowerWord[i] == letter || current.includes(lowerWord[i])) {
            updatedWord += lowerWord[i]
          } else {
            updatedWord += "_"
          }
        }
    
        return updatedWord
      }

    return (
        <div>
            <input id="guess" type='text' placeholder='Guess a letter' />
            <button onClick={()=>clickHandler()}>Guess</button>
        </div>
    )
}

export default UserInput