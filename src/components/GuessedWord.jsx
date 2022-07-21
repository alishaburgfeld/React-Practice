function GuessedWord({puzzle, answer}) {
        let workingWord=""
        for (let char of puzzle) {
            workingWord+= `${char} `
        }
        if (puzzle === answer) {
            return (
                <h1> Wahoo you guessed it!!! The word was {answer}</h1>
            )
        }
        else {
            return (
                <div>
                    {workingWord}
                </div>
            )
        }
    
}



export default GuessedWord