import SearchBar from "./SearchBar";

const Header = (props) => {
    console.log('Header', props)

    return (
      <div className="Header">
       <h2>Hunger Header</h2>
       <SearchBar />
      </div>
    )  
  }
  export default Header