import sb from './SearchBar.module.css'

const SearchBar = () => {
  
  return (
    <form className={sb.container}>
      <label htmlFor="search" className="visually-hidden"> Search The Site:</label> 
      <input 
        type="search" 
        name='search'
        id='search' 
        className={sb.searchInput}
        placeholder={`Search for ${""}`}//write character dynamics here afterwards
        
        />
    </form>
  )
}

export default SearchBar