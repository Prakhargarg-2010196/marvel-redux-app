import { Link, NavLink } from "react-router-dom";

import Logo from "../../assets/marvel-logo-svg-vector.svg"
// import SearchBar from '../search-bar/SearchBar';
import hd from './Header.module.css';

const Header = () => {
  return (
    <header >
        <div  className={hd.container}>
        <NavLink to="/"><img src={Logo} alt="logo" className={hd.logo} /></NavLink>
        {/* To be implemented later on */}
        {/* <SearchBar></SearchBar> */}
          <div className={hd.buttonContainer}>
          <button className={hd.button}><Link  to="/comicPage"> Comics</Link></button>
            <button className={hd.button}>Characters</button>
          
          </div>
        </div>
        
        
    </header>
  )
}

export default Header