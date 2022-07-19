function HistoryElement(props) {

    return (
        <div>
            if ({props.display}) {
                <ul>
                {props.renderHistory()}
                </ul>
            }
        </div>
        )
}
            
export default HistoryElement