import {useState} from "react";
import InputAndSubmitForm from "./InputAndSubmitForm";
import DisplayElement from "./DisplayElement";
import VowelCounter from "./VowelCounter";
import HistoryViewButton from "./HistoryViewButton";
import HistoryElement from "./HistoryElement";


function MyComponent() {

    const [message, setMessage] = useState([]);
    const [history, setHistory] = useState([]);
    const [counter, setCounter] = useState(0);

    const getInput=(evt) => {
        let input= evt.target[0].value
        let newInput=[]
        evt.preventDefault()

        let vowels="aeiou"
        console.log(input)
        for (let i=0; i< input.length; i++) {
            if (vowels.includes(input[i])) {
                setCounter(prevCounter=> prevCounter+1)
                newInput.push(<span className="vowel" key={`${i}`}>{`${input[i]}`}</span>)
            }
            else {
                newInput.push(<span key={`${i}`}>{`${input[i]}`}</span>)
            }
        }
        setMessage(newInput);

        // adds each new input to the array of past inputs
        let newHistory = [...history, newInput]
        setHistory(newHistory)

    }
    
    // I'm trying to create a function that will make a list of each input, then I want to call that function on button click display it in a list
    // Here is the function I'm trying to use to make the list, and "HistoryElement" is where I'm trying to display it
    const changeHistory= ()=> {
        let elements = []
        for (let i=0; i< history.length;i++) {
            elements.push(<li id={`${i}`} key={`${i}`}>{history[i]}</li>)
        }
        setHistory(elements)
    }

    
    return (
        <div>
            <InputAndSubmitForm clickFunction={getInput}/>
            <DisplayElement value={message}/>
            <VowelCounter vowelCount={counter}/>
            <HistoryViewButton changeHistory={changeHistory()} />
            <HistoryElement historyValue={history}/>
        </div>
    )

}

export default MyComponent