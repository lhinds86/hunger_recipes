import React from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = (props) => {
    console.log('SearchBar', props)

    let navigate= useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault();
      props.getMeal(e);
      navigate('/mainIngredient')
  }

    return (
      <div className="SearchBar">
        <form onSubmit={ handleSubmit }>
             <input type="text" value={props.newSearch.search} onChange={props.handleChange} name='searchQuery' />
            <button>Submit</button>
         </form>
      </div>
    )  
  }
  export default SearchBar