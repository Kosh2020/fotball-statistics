import React, {useState, useEffect} from 'react';
import s from './Leagues.module.css';
import  League  from './League/League';
import  Search  from '../common/Search/Search';


const TITLE = 'Список лиг';

const Leagues = (props) => {

  let Data=null;
  let filteredDataLeagues = null;

   if ((props.leagues !== null)&(props.leagues !== undefined)){ 
      Data=props.leagues;}

  if ((Data !== null)&(Data !== undefined)){ 
      filteredDataLeagues = Data.filter( league => {
        return league.leagueName.toLowerCase().includes(props.search.toLowerCase())
      })
  }
     
  /*let selLeague = (text) => {
    let action = setLeagueCreator(text);
    props.store.dispatch(action);   
  }*/

  const ListLeagues = () => { 
    
      if ((filteredDataLeagues !== null)&(filteredDataLeagues !== undefined)){ 
         return( filteredDataLeagues.map(item => ( 
            < League league_id={ item.leagueCode } league_name={ item.leagueName } year={ props.year } selLeague={ props.selLeague } /> ))        
         )
      }
      else{
      return( 'Нет данных'
        )
      }
    
  }

 	return( 
    <div >
      <h2>{ TITLE }  { props.year }</h2>   
      <div className={ s.aside }>         
        <ListLeagues/>
      </div>
    </div>
  )//return      
  //}
}

export default Leagues;