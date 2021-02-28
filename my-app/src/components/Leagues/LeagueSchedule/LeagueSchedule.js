import React, {useState, useEffect} from 'react';
import s from './LeagueSchedule.module.css';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import Search  from '../../common/Search/Search';



const LeagueSchedule = (props) => {
  let state = props;
  const TITLE = 'Расписание лиги  "'+props.league_name+'"  '+props.year +' год';

  // let Data=props.Data.matches;
  let Data=null;
  if (props.leagueSchedule !== null){
      Data=props.leagueSchedule.listSchedule;}
 
  //console.log("Data="+Data)

  let filteredDataLeagues = null;

 /* if (Data !== undefined){ 
      filteredDataLeagues = Data.filter( leaguesSchedule => {
        return (leaguesSchedule.homeTeam.name+leaguesSchedule.awayTeam.name).toLowerCase().includes(props.search.toLowerCase())
      })
  }*/
    
 if ((Data !== null)&(Data !== undefined)){ 
      filteredDataLeagues = Data.filter( leaguesSchedule => {
        return (leaguesSchedule.homeTeam.name+leaguesSchedule.awayTeam.name).toLowerCase().includes(props.search.toLowerCase())
      })
  }

  let listItems=<div>Нет данных</div> 

  if (filteredDataLeagues !== null ){
     listItems=filteredDataLeagues.map(item => (  
     <li className={s.item} key={item.id}><span className={s.date_text}>{moment(item.utcDate).format('YYYY-MM-DD')} - {moment(item.lastUpdated).format('YYYY-MM-DD')} </span>  {item.homeTeam.name} - {item.awayTeam.name})))
     </li> 
  ))
  }
/*
 if (error) {
      return <div>Error: {error.message}</div>;
  } 
  else if (!loaded) {
      return <div>Loading...</div>;
  } 
  else {
*/
	return ( 
    <div className={s.content}>
    <div className={s.title}>
      <h2>{TITLE}</h2>
    </div>
        <ul>    
          {listItems}
        </ul>
        
    </div>
	) 
//}
}

export default LeagueSchedule;