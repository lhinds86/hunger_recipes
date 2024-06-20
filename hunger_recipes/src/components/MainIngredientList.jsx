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
      <div className="main-ingredient-card">
       {props.meals.map((meal)=> (
           <div className="MainDiv" onClick={()=>showMeal(meal)} key={meal.idMeal}>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <ul>
                <li>Name: {meal.strMeal}</li>
                <li>Category: {meal.strCategory}</li>
                <li>Area: {meal.strArea} </li>
            </ul>
        </div>
    ))}
    </div>
   </div> 
    )
}
  export default MainIngredientList