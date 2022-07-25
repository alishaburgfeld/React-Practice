import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import ArticleList from '../components/AritcleList'


function SectionPage ({articles}) {

    const {sectionName} = useParams()
    // sectionName comes from line 43 on App.jsx. it is the variable name after the : and essentially declares "this is my variable that you can grab from useParams."
    const [sectionArticles, setSectionArticles] = useState([])

    console.log(sectionName)
    
    useEffect( ()=> {
        const filteredArticles= articles.filter(article => article.section.toLowerCase() === sectionName.toLowerCase())
        console.log(filteredArticles)
        setSectionArticles(filteredArticles)
    }, [sectionName])
// line 16 says when sectioname is updated, run the use effect function
    

    return(
        <div>
            {/* {sectionArticles.map((article)=> (
                <p>{article.title} -- {article.section}</p>    
            ))} */}
            <ArticleList articles={sectionArticles}/>
        </div>
    )
}

export default SectionPage