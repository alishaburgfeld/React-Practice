import ArticleList from "../components/ArticleList"


function HomePage ({articles}) {

    return (
        <div>
            <ArticleList articles={articles}/>
        </div>
    )
}

export default HomePage