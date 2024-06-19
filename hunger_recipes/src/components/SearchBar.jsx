

const SearchBar = (props) => {
    console.log('SearchBar', props)

    return (
      <div className="SearchBar">
        <form onSubmit={ handleSubmit }>
             <input type="text" onChange={props.handleChange} name='search query' />
            <button>Submit</button>
         </form>
      </div>
    )  
  }
  export default SearchBar