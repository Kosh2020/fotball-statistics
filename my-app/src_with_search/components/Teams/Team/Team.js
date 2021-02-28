import React from 'react';
import s from './Team.module.css';


const Team = (props) => {
  return ( <li key={props.team_key}>
                {props.team_name}<a href={"/leagueschedule/"+props.team_key}>   Расписание команды</a>
               </li>      
  )  
}

export default Team;