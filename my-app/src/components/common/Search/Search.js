import React from 'react';
import s from './Search.module.css';
import { setSearchCreator } from "../../../redux/search-reducer";

const Search = (props) => {

  let selectSearch = (e) => {
    let text = e.target.value; 
    let action = setSearchCreator(text);
  	props.dispatch(action); 
    
  }	
        
  return <>
  	<div className={s.search}>
  	    <input type="text" placeholder="Поиск" onChange={selectSearch} />
  	</div>
  </>
}

export default Search;