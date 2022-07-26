import axios from 'axios'
async function fetchArticleByID (articleID) {
    // return await axios.get(`http://hn.algolia.com/api/v1/items/${articleID}`, {
        //couldnt get it working this way
    let response = await axios.get('http://hn.algolia.com/api/v1/search?', {
    params: {
      tags: 'story_'+articleID
      // so this will show us articles that are older than the past 24 hours and have story and poll tags
    
    }
    
    })
  return response
}

async function fetchArticleBySection(sectionName){
    if (sectionName ==="jobs"){
      let response = await axios.get(`http://hn.algolia.com/api/v1/search?`,{
        params:{
          query:sectionName,
          tags:`story`
        }
      })
      return response
    }
    else if(sectionName ==="comments"){
      let response = await axios.get(`http://hn.algolia.com/api/v1/search?`,{
        params:{
          tags:'comment'
        }
      })
      return response
    }
    else if(sectionName ==="show_hn"){
      let response = await axios.get(`http://hn.algolia.com/api/v1/search?`,{
        params:{
          tags:sectionName
        }
      })
      return response
    }
    else if(sectionName ==="ask_hn"){
      let response = await axios.get(`http://hn.algolia.com/api/v1/search?`,{
        params:{
          tags:sectionName
        }
      })
      return response
    }
    else if (sectionName === 'new'){
      let response = await axios.get(`http://hn.algolia.com/api/v1/search_by_date?`,{
        params:{
          tags: ('story'),
        }
      })
      return response
    }
    else if (sectionName === 'past'){
      const date = Math.floor(Date.now() / 1000)- 86400
      let response= axios.get('http://hn.algolia.com/api/v1/search_by_date?', {
        params:{
          tags: ('story'),
          hitsPerPage: 50,
          numericFilters: `created_at_i<${date}`
        }
      })
      return response
    }
    console.log('inside section Article function')
    return response
}

async function fetchArticles(filters=null){
  let response = await axios.get(`http://hn.algolia.com/api/v1/search?`,{
    params:{
      query:filters,
      tags:`story`
    }
  })
  return response
}

export {
    fetchArticleByID,
    fetchArticleBySection,
    fetchArticles
}
