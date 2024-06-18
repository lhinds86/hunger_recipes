
import { useState } from 'react'
import Main from './components/Main'
import Header from './components/Header'
import './App.css'


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

    <div className='container'>
      <Header/>
      <Main/>
    </div>
  )
}

export default App
