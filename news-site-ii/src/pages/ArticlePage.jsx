import {useParams} from 'react-router-dom'
import Article from '../components/Article'

function ArticlePage ({getArticleByID}) {
    let {articleID} = useParams()
    // This will grab the article id from the parameters passed through the url
    
    const article = getArticleByID(articleID-1)
    // subtracting here so that we can access the correct article ID since we added one to make a pretty url 
    // console.log(article)
    
    return (
        <div>
            <Article {...article}/>
            {/* destructures all the properties in article */}
        </div>
    )
}

export default ArticlePage