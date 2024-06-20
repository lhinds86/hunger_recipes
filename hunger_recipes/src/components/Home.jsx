import SearchBar from "./SearchBar"

const Home = (props) => {
  console.log(props)

  console.log (props)
    return (
      <div className="home">
        <div>
          <h1>Hunger Recipes</h1>
          <h2>
            Your Cravings Explored
          </h2>
          {/* <SearchBar getMeal={props.getMeal} searchQuery={props.searchQuery} handleChange={props.handleChange}/> */}
        </div>
      </div>
    )
  }
  export default Home