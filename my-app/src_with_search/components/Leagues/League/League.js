import React from 'react';
import s from './League.module.css';
import { NavLink } from 'react-router-dom';

const League = (props) => {
  console.log("props.period");
console.log(props.period);
	return ( <div  className={s.item} key={props.league_id}>
                {props.league_name}
                <NavLink to={"/leagueschedule/"+props.league_id+"/"+props.period}>   Расписание лиги</NavLink>
                <NavLink to={"/teams/"+props.league_id+"/"+props.period}>        Список команд</NavLink>
           </div>      
	)  
}

export default League;