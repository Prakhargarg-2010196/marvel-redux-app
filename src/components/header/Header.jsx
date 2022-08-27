import { Link } from "react-router-dom";
import Logo from "../../assets/iron-man.png"
import SearchBar from '../search-bar/SearchBar';
import hd from './Header.module.css';
const Header = () => {
  return (
    <header >
        <div  className={hd.container}>
        <img src={Logo} alt="logo" className={hd.logo} />
        <SearchBar></SearchBar>
          <div className={hd.buttonContainer}>
          <button className={hd.button}><Link  to="/comicPage"> Comics</Link></button>
            <button className={hd.button}>Characters</button>
          
          </div>
        </div>
        
        
    </header>
  )
}

export default Header