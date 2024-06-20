import React from 'react'
import { useNavigate } from "react-router-dom"

const MainIngredientList = (props) => {
   
    let navigate = useNavigate()

    const showMeal = (meal) => {
          navigate(`/mainIngredient/${meal.idMeal}`)
        }

    const returnHome = () => {
            navigate('/');
          };
          
    return (
      <div className="MainIngredientList">
        <button onClick={returnHome}>Return Home</button>
       {props.meals.map((meal)=> (
           <div className="MainDiv" onClick={()=>showMeal(meal)} key={meal.idMeal}>
            <h2>MainIngredientList</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} width='300' />
            <ul>
                <li>Name: {meal.strMeal}</li>
                <li>Category: {meal.strCategory}</li>
                <li>Area: {meal.strArea} </li>
            </ul>
        </div>
    ))}
    </div>
    )
    }   
  export default MainIngredientList