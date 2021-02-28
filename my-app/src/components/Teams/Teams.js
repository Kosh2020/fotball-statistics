import React from 'react';
import { withRouter } from 'react-router-dom';
import s from './Teams.module.css';
import Search  from '../common/Search/Search';
import Team  from './Team/Team';
 
const Teams = (props) => {
  const TITLE = 'Команды лиги "'+props.league_name+'" '+props.year +' год';;
 
  let Data=null;
  if (props.teams != null){
      Data=props.teams;}

  let filteredDataLeagues = null;

  if (Data !== null){ 
    filteredDataLeagues = Data.filter( team => {
        return team.name.toLowerCase().includes(props.search.toLowerCase())})
  }

  const ListTeams = () => {
    let result
        if ((filteredDataLeagues !== null)&(filteredDataLeagues !== undefined)){ 
        result=filteredDataLeagues.map(item => ( 
        < Team team_id={item.id} league_id={props.match.params.league_id} team_name={item.name} selTeam={props.selTeam}/> ));}
      else { result='Нет данных'}

    return result;
  }

  return<>
	  <div className={s.content}>
      <div className={s.title}>
        <h2>{TITLE}</h2>
      </div> 
      <ul>  
        <ListTeams/>
      </ul>
    </div>
  </>  
}

export default withRouter(Teams);