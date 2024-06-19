
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import { useNavigate } from 'react-router-dom'
import { Route, Routes} from 'react-router-dom'
import MainIngredientList from './MainIngredientList'
import RecipeDetails from './RecipeDetails'
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
