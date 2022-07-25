// import ArticleGroup from "./ArticleGroup"
import ArticleTeaser from "./ArticleTeaser"



function ArticleList ({articles}) {

    const HandleTitleClick = (article_id) => {
        console.log(article_id)
      }

    return (
        <div>
            {articles.map((article) => (
                <ArticleTeaser {...article} key={article.id}/>
                // <ArticleGroup key={article.id} article={article}/>
                ))
            }
        </div>
    )
}

export default ArticleList