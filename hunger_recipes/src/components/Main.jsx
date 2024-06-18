import { Route, Routes} from 'react-router-dom'
import MainIngredientList from './MainIngredientList'
import RecipeDetails from './RecipeDetails'
import Home from './Home'

const Main = (props) => {
    console.log('Main', props)

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
  export default Main