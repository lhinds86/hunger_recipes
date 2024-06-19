import { useState } from 'react'
import SearchBar from './components/SearchBar'
import { useNavigate } from 'react-router-dom'
import { Route, Routes} from 'react-router-dom'
import MainIngredientList from './MainIngredientList'
import RecipeDetails from './RecipeDetails'
import './App.css'

function App() {

  let navigate= useNavigate()

  const [mainIngredient, setMainIngredient] = useState([])
        const getMeal = async () => {
          const response = await axios.get (`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
          setMainIngredient(response.data.results)
        }
        getMeal()
        console.log(mainIngredient)
  
  const handleSubmit = (e) => {
    props.addBoat(e)
    navigate('/listings')
  }

  const handleChange = (e) => {
    setNewBoat({ ...newBoat, [e.target.name]: e.target.value })
  }

  return (
      <div className="Main">
    <Routes>
        <Route path="/json/v1/1/search.php?s=" element = {<MainIngredientList/>} />
        <Route path="/" element = {<Home />} />
        <Route path="/json/v1/1/search.php?s=/:id" element = {<RecipeDetails />} />
    </Routes>
      </div>
  )
}

export default App
