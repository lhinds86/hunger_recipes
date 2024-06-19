import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import { Route, Routes} from 'react-router-dom'
import MainIngredientList from './MainIngredientList'
import RecipeDetails from './RecipeDetails'
import './App.css'
import axios from 'axios'

function App () {
  
  const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

  const [mainIngredient, setMainIngredient] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

    const getMeal = async (e) => {
      e.preventDefault()
      const response = await axios.get (`${BASE_URL}${searchQuery}`)
      setMainIngredient(response.data.meals)
      }
      getMeal()
    
  

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
      <div className="Main">
    <Routes>
        <Route path="/mainIngredient" element = {<MainIngredientList mainIngredient={mainIngredient}/>} />
        <Route path="/search" element = {<SearchBar getMeal={getMeal} handleChange={handleChange}/>} />
        <Route path="/mainIngredient/:id" element = {<RecipeDetails />} />
    </Routes>
      </div>
  )
}

export default App
