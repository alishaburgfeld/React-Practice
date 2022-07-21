function GuessedWord({puzzle}) {
        let workingWord=""
        for (let char of puzzle) {
            workingWord+= `${char} `
        }
    return (
        <div>
            {workingWord}
        </div>
    )
}



export default GuessedWord