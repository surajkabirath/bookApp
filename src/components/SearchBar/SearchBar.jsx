import { FaSearch } from "react-icons/fa";
import "./searchBar.css";
const SearchBar = () => {
  return (
    <div className="searchbar">
      <div className="searchbar-contain">
        <FaSearch />

        <input type="text" name="" placeholder="search your favourite..."/>
      </div>
    </div>
  );
};

export default SearchBar;
