import { useState } from 'react'
import axios from 'axios'

import './App.css'

import AppNav from './components/AppNav'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import SectionPage from './pages/SectionPage'

import NewsData from './data/news.json'

import {fetchArticles, fetchArticleByID, fetchArticleBySection} from './api/ArticlesAPI'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react'





// https://hn.algolia.com/api
function App() {

  const callApi = () => {
    // Date.now() gives you the milliseconds that have ellapsed since 1970, their created_at is based on seconds so we need to divide by 1000. 86400 is 24 hours in seconds
    const date=Math.floor(Date.now()/ 1000) - 86400
  // return axios.get('http://hn.algolia.com/api/v1/search_by_date?tags=story')
  // can also pass in the parameters separately which makes it easier when using multiple
  return axios.get('http://hn.algolia.com/api/v1/search_by_date?', {
    params: {
      tags: ('story'),
      hitsPerPage: 50,
      numericFilters: 'created_at_i<'+date
      // so this will show us articles that are older than the past 24 hours and have story and poll tags
    }
  })
}

  async function getData() {
    try {
      const jsonResponse = await callApi()
      // console.log(jsonResponse)
      // console.log(jsonResponse.data.hits)
      setArticles(jsonResponse.data.hits)
    }
    catch(error){
      console.error('Error occurred fetching data: ', error)
    }
  }
  
  // cant make useEffect an asynch function, and to use await you need to hav an asynch function, so didn't put lines 22-28 inside the use effect
  useEffect(() => {
    getData()
  }, [])
  const[articles, setArticles] = useState([])

  // were using this to get articles from our json data, but now going to get them from the api
  // fetchArticles()
  // const[articles, setArticles] = useState(NewsData.map(( article, index) => {
  //   return {
  //     id: index,
  //     title: article.title,
  //     abstract: article.abstract,
  //     byline: article.byline,
  //     image: article.multimedia.length ? article.multimedia[0] : null,
  //     created_date: article.created_date,
  //     section: article.section
  //   }})
  //   )

  
  return (
    <div className="App">

      <AppNav />
      <Router> 
        <Routes>
          <Route path='/' element={<HomePage articles = {articles}/>} />
          <Route path='/articles/:articleID' element={<ArticlePage  articles = {articles} />} />
          <Route path='/sections/:sectionName' element={<SectionPage articles={articles}/> } />

        </Routes>
      </Router>   
  
    </div>
  )
}

export default App