import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const MainIngredientList = (props) => {
    
        const [mainIngredient, setMainIngredient] = useState([])

    useEffect(() => {
        const getMainIngredient = async () => {
          const response = await axios.get (`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
          setMainIngredient(response.data.results)
        }
        getMainIngredient()
      }, [])
      console.log(mainIngredient)
   
    let navigate = useNavigate()

    const showShip = (index) => {
          navigate(`${index}`)
        }

    return (
      <div className="MainIngredientList">
       <h2>MainIngredientList</h2>
       {mainIngredient.map((starship,index)=> (
        <div className="starshipDiv" onClick={()=>showShip(index)} key={index}>
            <ul>
                <li>Name: {starship.name}</li>
                <li>Manufactruer: {starship.manufacturer}</li>
                <li>Cost: ${starship.cost_in_credits}</li>
                <li>Capacity: {starship.passengers}</li>
            </ul>
        </div>
    ))}
    </div>
    )
    }   
  export default MainIngredientListList