import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const RecipeDetails = (props) => {

  const navigate = useNavigate();

  const [meal, setMeal] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [amounts, setAmounts] = useState([])

  const recipeToArray = (meal) => {

    let recipeArray = Object.entries(meal)

    let ingredientsArray = recipeArray.filter((item) => item[0].includes('strIngredient') && item[1] !== '')
    
    if (ingredientsArray) {
      setIngredients(ingredientsArray)
    } else {
      console.log('Ingredients not set')
    }  

    let amountsArray = recipeArray.filter((item) => item[0].includes('strMeasure') && item[1] !== '')
    
    if(amountsArray) {
      setAmounts(amountsArray)
    } else {
      console.log('Amounts not set')
    }
  }

  // this pulls the id from our url and allows us to find an object with it
  let { id } = useParams()

  useEffect(() => {
    
    let selectedRecipe = props.meals.find((meal) => meal.idMeal === id)

    console.log('Selected', selectedRecipe) // works

    if (selectedRecipe) {
      setMeal(selectedRecipe)
      recipeToArray(selectedRecipe)   
    } else {
      console.log('Recipe not set')
    }
    
  }, [props.meals, id])  

  const returnPreviousPage= () => {
    navigate('/mainIngredient')
  }

  return meal ? (
    <div className="detail">
      <button onClick={returnPreviousPage}>Previous Page</button>
      <img className="detail-img" src={meal.strMealThumb} alt={meal.strMeal}/>
      <h2>{meal.strMeal}</h2> 
      <ul style={{listStyleType: 'none'}}>
      {
        amounts.map((amount, index) => (
          <div className="list" key={amount[0]}>
              <li>{amount[1] && ingredients[index] ? `${amount[1]} ${ingredients[index][1]}` : null}</li>
          </div>
        ))
      }
      </ul>
      <h5>{meal.strInstructions}</h5>
    </div>
 
  ) : <h2>Recipe not found</h2>
}

export default RecipeDetails


















// const RecipeDetails = (props) => {

// console.log('main project', props)  
    
// let {id} = useParams()

//     const [meal, setMeal] = useState('')

//     useEffect(() => {
//         const getRecipe = props.meals.find((meal)=> meal.idMeal === id)
//         setMeal(getRecipe)
//         }, [props.meals, id])

//         return meal ? (
//             <div className="detail-header">
//               <h1>Recipe Details</h1>
//               <div className="detail-container">
//                 <img src={meal.strMealThumb} alt={meal.strMeal} />
//                 <h2>Name: {meal.strMeal}</h2>
//                 <h3>Catergory: {meal.strCategory}</h3>
//                 <h3>Area: {meal.strArea}</h3>
//                 <p>Instructions: {meal.strInstructions}</p>
//                 <h4>Ingredients:</h4>
//                 <ol type="1">
//                   <li>Amount: {meal.strMeasure1} | {meal.strIngredient1}</li>
//                   <li>{meal.strMeasure2} | {meal.strIngredient2}</li>
//                   <li>{meal.strMeasure3} | {meal.strIngredient3}</li>
//                   <li>{meal.strMeasure4} | {meal.strIngredient4}</li>
//                   <li>{meal.strMeasure5} | {meal.strIngredient5}</li>
//                   <li>{meal.strMeasure6} | {meal.strIngredient6}</li>
//                   <li>{meal.strMeasure7} | {meal.strIngredient7}</li>
//                   <li>{meal.strMeasure8} | {meal.strIngredient8}</li>
//                   <li>{meal.strMeasure9} | {meal.strIngredient9}</li>
//                   <li>{meal.strMeasure10} | {meal.strIngredient10}</li>
//                   <li>{meal.strMeasure11} | {meal.strIngredient11}</li>
//                   <li>{meal.strMeasure12} | {meal.strIngredient12}</li>
//                   <li>{meal.strMeasure13} | {meal.strIngredient13}</li>
//                   <li>{meal.strMeasure14} | {meal.strIngredient14}</li>
//                   <li>{meal.strMeasure15} | {meal.strIngredient15}</li>
//                   <li>{meal.strMeasure16} | {meal.strIngredient16}</li>
//                 </ol>
                

//                 {/* <Link to="/starships"> Return to Starships</Link> */}
//               </div>
//             </div>
//           ) : <h2>Loading Data...</h2>;
//         }  
//   export default RecipeDetails