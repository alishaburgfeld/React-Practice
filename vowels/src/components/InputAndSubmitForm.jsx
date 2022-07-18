function InputAndSubmitForm(props) {

return(
    <form onSubmit={props.clickFunction}>
        <input id='my-input' type="text"/>
        <button id='my-button' > Submit</button>
    </form>
)
}

export default InputAndSubmitForm