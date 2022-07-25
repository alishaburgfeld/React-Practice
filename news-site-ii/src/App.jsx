import { useState } from 'react'
// import './App.css'

import NavBar from './components/NavBar'
import ArticleTeaser from './components/ArticleTeaser'
import Article from './components/Article'
import ArticleGroup from './components/ArticleGroup'
import ArticleList from './components/ArticleList'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'

import NewsData from '../data/news.json'
import NavItemsData from '../data/navItems.json'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';



const randomArticleIndex = 0
const randomArticle = NewsData[randomArticleIndex];

function App() {

  const[navItems, setNavItems] = useState(NavItemsData)
  const[articles, setArticles] = useState(NewsData.map(( article, index) => {
    return {
      id: index,
      title: article.title,
      abstract: article.abstract,
      byline: article.byline,
      image: article.multimedia.length ? article.multimedia[0] : null,
      created_date: article.created_date
    }})
    )

  const getArticleByID = (articleID) => {
    return articles[articleID]
    // we set the article id equal to the index of the article, so this is why this works
  }

  return (
    <div className="App">
      <NavBar items={navItems} />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage articles={articles} /> }/>
          {/* need to put # prior to typing in the next route. so it'd be http://localhost:5173/#/articles/1/ */}
          <Route path='/articles/:articleID' element={<ArticlePage getArticleByID={getArticleByID} />}/>
        </Routes>
      </Router>
      {/* <ArticleList articles={articles}/> */}
      
    </div>
  )
}

export default App
