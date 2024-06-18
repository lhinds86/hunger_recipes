import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios'

const RecipeDetails = (props) => {
    console.log('RecipeDetails', props)
    
let {id} = useParams()

        const [meal, setMeal] = useState()

    useEffect(() => {
        const getMeal = async () => {
            const response = await axios.get (`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
            setMeal(response.data.results[id])
          }
          getMeal()
        }, [])
      console.log(meal)
   
        return meal ? (
            <div className="detail">
              <div className="detail-header">
                <h2>Name: {meal.name}</h2>
                <h3>Manufactruer: {meal.manufacturer}</h3>
                {/* <Link to="/starships"> Return to Starships</Link> */}
              </div>
            </div>
          ) : <h2>Loading Data...</h2>;
        }  
  export default RecipeDetails