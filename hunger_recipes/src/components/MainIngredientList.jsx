import React from 'react'
import { useNavigate } from "react-router-dom"

const MainIngredientList = (props) => {
   
    let navigate = useNavigate()

    const showMeal = (meal) => {
          navigate(`/mainIngredient/${meal.idMeal}`)
        }

    return (
      <div className="main-ingredient-card">
       {props.meals.map((meal)=> (
           <div className="MainDiv" onClick={()=>showMeal(meal)} key={meal.idMeal}>
<<<<<<< HEAD
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
=======
            <h2>MainIngredientList</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} width='300' />
>>>>>>> 91041a7dfd35cda9deccf943651224dda1c7c5c7
            <ul>
                <li>Name: {meal.strMeal}</li>
                <li>Category: {meal.strCategory}</li>
                <li>Area: {meal.strArea}</li>
            </ul>
        </div>
    ))}
    </div>
    )
    }   
  export default MainIngredientList