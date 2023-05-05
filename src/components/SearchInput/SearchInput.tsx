import { AiOutlineSearch } from "react-icons/ai";
import classes from "./SearchInput.module.scss";

function SearchInput({...props}:any) {
  return (
<form className={classes.search}>
    <input type="text" placeholder="Search"/>
    <button><AiOutlineSearch/></button>
</form>
  );
}

export default SearchInput;