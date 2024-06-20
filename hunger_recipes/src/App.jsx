import './App.css'
import axios from 'axios'
import React, { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import SearchBar from './components/SearchBar'
import MainIngredientList from './components/MainIngredientList'
import RecipeDetails from './components/RecipeDetails'
import Home from './components/Home'

function App () {
  
  const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

  const [mainIngredient, setMainIngredient] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

    const getMeal = async (e) => {
      e.preventDefault()
      const response = await axios.get (`${BASE_URL}${searchQuery}`)
      setMainIngredient(response.data.meals)
      }
    
  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
      <div className="Main">
        <SearchBar getMeal={getMeal} searchQuery={searchQuery} handleChange={handleChange} />
    <Routes>
        <Route path='/' element={<Home />}/>
        {/* <Route path='/' element={<Home getMeal={getMeal} searchQuery={searchQuery} handleChange={handleChange}/>}/> */}
        <Route path="/mainIngredient" element = {<MainIngredientList meals={mainIngredient}/>} />
        <Route path="/mainIngredient/:id" element = {<RecipeDetails meals={mainIngredient}/>} />
    </Routes>
      </div>
  )
}

export default App
