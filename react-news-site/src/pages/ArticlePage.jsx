import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Article from '../components/Article'
import { fetchArticleByID } from '../api/ArticlesAPI'


function ArticlePage ({articles}){

    let {articleID} = useParams()

    const [article, setArticle] = useState(null)

    // if our parameter changes we're setting up this userEffect to fetch the right article
    useEffect(()=> {
        fetchArticleByID(articleID)
        .then((response)=> {
            console.log(response)
            setArticle(response.data.hits[0])
        })
        // console.log(`your response is ${response}`)
        // console.log(response.data.hits)
        // setArticle(response.data)
    }, [articleID])

    // old code with json news data:
    // const article = articles[articleID-1] // -1 because we added 1 in the url to make it restful

    return (
        <div>
            <Article {...article} />
        </div>
    )
}

export default ArticlePage