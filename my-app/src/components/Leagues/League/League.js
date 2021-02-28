import React, {useState, useEffect}  from 'react';
import s from './League.module.css';
import { NavLink } from 'react-router-dom';


const League = (props) => {
  /*let refLeagueShedule = React.createRef();  
  let refListTeams = React.createRef();  */
	const [league, setLeague] = useState('');
 
 let selectLeague = () => {
  //console.log("props.league_id="+props.league_id);
   let league={id:props.league_id, name: props.league_name}
   props.selLeague(league);
   /*let action = setLeagueCreator(props.league_id);
   props.dispatch(action); */
  }

//console.log("eee"+league);
	return ( <li  className={s.item} key={props.league_id}>
            {props.league_name}
            {league}
           
            <NavLink className={s.ref} to={"/leagueschedule/"+props.league_id} onClick={selectLeague}>   Расписание лиги</NavLink>
            <NavLink className={s.ref} to={"/teams/"+props.league_id}  onClick={selectLeague}>        Список команд</NavLink>
        
           </li>      
	)  
}

export default League;
/*    <div className={s.refs_item}>  */