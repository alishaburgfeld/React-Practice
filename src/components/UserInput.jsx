function UserInput ({answer, setAvailableLetters, availableLetters, puzzle, setPuzzle}) {
    
    const [guesses, setGuesses] = useState([])

    const clickHandler = () => {
        console.log(`guesses at line 6 userinput is ${guesses}`)
        
        let guessedLetter = document.getElementById('guess').value
        if(guessedLetter.length !== 1) {
          window.alert("Please enter a single letter")
        } 
    
        if (answer.includes(guessedLetter)) {
            let newData = [...guesses, guessedLetter]
            setGuesses(newData)
          setAvailableLetters(prevAvailableLetters => prevAvailableLetters.replace(guessedLetter, ""))
          console.log(`Available letters at line 12 in userinput.jsx ${availableLetters}`)
          setPuzzle(updateWord(answer, guessedLetter, guesses))
        }
        
      }
      
      function updateWord(word, letter, current) {
        console.log(`guesses at line 23 userinput is ${guesses}`)
        let updatedWord = ""
        
        for (let i = 0; i < word.length; i++) {
    
          if(word[i] == letter || current.includes(word[i])) {
            updatedWord += word[i]
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