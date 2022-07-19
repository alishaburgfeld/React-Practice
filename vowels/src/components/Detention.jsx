import {useState} from "react";
function Detention () {
    const [data, setData] = useState("I will never mutate state or props directly")


    const setValues = () => {
        let value = data
        let detentionArray=[]
        for (let i=0;i<100;i++) {
            detentionArray.push(<li id={`${i}`} key={`${i}`}>{value}</li>)
        }

        return detentionArray
    }

    return (
        <div>
            <ul>
                {setValues()}
            </ul>
        </div>
    )
}

export default Detention