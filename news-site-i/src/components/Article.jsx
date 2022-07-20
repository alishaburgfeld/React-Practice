function Article(props) {
  function checkValid(value) {
    if (value!== undefined || value.length>0) {
      return value
    }
    else {
      return ''
    }
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.created_date}</p>
      
      <h2>{props.byline}</h2>
      <img src={checkValid(props.image)}/>
      <p>{checkValid(props.abstract)}</p>
    </div>
  )
}

export default Article;

