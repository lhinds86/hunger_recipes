import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

const RecipeDetails = (props) => {
    
let {id} = useParams()

    const [meal, setMeal] = useState('')

    useEffect(() => {
        const getRecipe = props.meals.find((meal)=> meal.idMeal === id)
        setMeal(getRecipe)
        }, [props.meals, id])

        return meal ? (
            <div className="detail-header">
              <h1>Recipe Details</h1>
              <div className="detail-container">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <h2>Name: {meal.strMeal}</h2>
                <h3>Catergory: {meal.strCategory}</h3>
                <h3>Area: {meal.strArea}</h3>
                <p>Instructions: {meal.strInstructions}</p>
                <h4>Ingredients:</h4>
                <ol type="1">
                  <li>Amount: {meal.strMeasure1} | {meal.strIngredient1}</li>
                  <li>{meal.strMeasure2} | {meal.strIngredient2}</li>
                  <li>{meal.strMeasure3} | {meal.strIngredient3}</li>
                  <li>{meal.strMeasure4} | {meal.strIngredient4}</li>
                  <li>{meal.strMeasure5} | {meal.strIngredient5}</li>
                  <li>{meal.strMeasure6} | {meal.strIngredient6}</li>
                  <li>{meal.strMeasure7} | {meal.strIngredient7}</li>
                  <li>{meal.strMeasure8} | {meal.strIngredient8}</li>
                  <li>{meal.strMeasure9} | {meal.strIngredient9}</li>
                  <li>{meal.strMeasure10} | {meal.strIngredient10}</li>
                  <li>{meal.strMeasure11} | {meal.strIngredient11}</li>
                  <li>{meal.strMeasure12} | {meal.strIngredient12}</li>
                  <li>{meal.strMeasure13} | {meal.strIngredient13}</li>
                  <li>{meal.strMeasure14} | {meal.strIngredient14}</li>
                  <li>{meal.strMeasure15} | {meal.strIngredient15}</li>
                  <li>{meal.strMeasure16} | {meal.strIngredient16}</li>
                </ol>
                

                {/* <Link to="/starships"> Return to Starships</Link> */}
              </div>
            </div>
          ) : <h2>Loading Data...</h2>;
        }  
  export default RecipeDetails