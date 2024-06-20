import React from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = (props) => {

    let navigate= useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault();
      props.getMeal(e);
      navigate('/mainIngredient')
  }

    return (
      <div className="searchBar">
        <form onSubmit={ handleSubmit }>
             <input type="text" onChange={props.handleChange} value={props.searchQuery} />
            <button type="submit">Submit</button>
         </form>
      </div>
    )  
  }
  export default SearchBar