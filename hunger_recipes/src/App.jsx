import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
// import Header from './components/Header'
// import Main from './components/Main'

function App() {
  
  const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

  const [meals, setMeals] = useState([])

  useEffect(() => {
    const getMeals = async () => {
      const res = await axios.get(`${BASE_URL}chicken`)
      let mealList = res.data.meals
      console.log(mealList)
      // setMeals(mealList)
    }
    getMeals()    
  })
  

  return (
    <div>
      {/* <Header/>
      <Main/> */}
    </div>
  )
}

export default App
