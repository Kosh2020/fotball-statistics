import React from 'react';
import s from './Team.module.css';
import { NavLink } from 'react-router-dom';


const Team = (props) => {

  let selectTeam = () => {
    let team={id:props.team_id, name: props.team_name}
    props.selTeam(team);
  }

  return <>
      <li className={s.item} key={props.team_key}>
        {props.team_name}
        <NavLink className={s.href} to={"/teamschedule/"+props.league_id+'/'+props.team_id} onClick={selectTeam}>   Расписание команды</NavLink>
      </li>      
  </>  
}

export default Team;