import ArticleList from "../components/AritcleList"
import {InputGroup} from 'react-bootstrap'
import {Form, Button} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import ArticleTeaser from "../components/ArticleTeaser"


function HomePage ({articles}){

    const [searchContent, setSearchContent] = useState("")
    const [results, setResults] = useState([])
    const handleChange = (event)=> {
        const value= event.target.value

        setSearchContent(value)
        // console.log(searchContent)
    }

    useEffect(()=>{
        if (searchContent !== "") {
            const filteredArticles= articles.filter(article=>article.title.includes(searchContent))
            setResults(filteredArticles)
        }
    }, [searchContent])
    // second paramatere in between brackts is what you want to track


    return (
        <div>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(event)=>handleChange(event)}
                    id="search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            <div>
            {
                results
                ? <div>
                    <h2>Matching articles:</h2>
                    {results.map((article) =>(
                    // <div> {article.title} </div>
                    <ArticleTeaser key={article.id} {...article} />
                    ))}</div>
                : ""
            }
            </div>
            <h2>All articles:</h2>
            <ArticleList articles={articles}/>
        </div>
    )
}

export default HomePage