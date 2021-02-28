import React from 'react';
import { withRouter } from 'react-router-dom';
import s from './TeamSchedule.module.css';

const TeamSchedule = (props) => {
  const TITLE1 = 'Лига "'+props.league_name+'" '+props.year +' год';
  const TITLE2 = 'Расписание команды "'+props.team_name+'"';

  let Data=null;
  if ((props.teamSchedule.listSchedule !== null)&(props.teamSchedule.listSchedule !== undefined)){
    Data=props.teamSchedule.listSchedule
  }

  let filteredDataTeams = null;

  if ((Data !== null)&(Data !== undefined)){ 
    filteredDataTeams = Data.filter( teamSchedule => {
      return (teamSchedule.awayTeam.name+teamSchedule.homeTeam.name).toLowerCase().includes(props.search.toLowerCase())
    })
  }
    
  let listItem = 'Нет данных' ;

  if ((filteredDataTeams !== null )&(filteredDataTeams !== undefined)){
    listItem=filteredDataTeams.map(item => (
      <li className={s.item} key={item.competition.id}><span className={s.date_text}>Дата:{item.utcDate}</span> Дом: {item.homeTeam.name}  (Гости:{item.awayTeam.name}) </li> 
    ))
  }    

  return<>
    <div className={s.content}>
      <div className={s.title}>  
        <h2>{TITLE1}</h2>
        <h2>{TITLE2}</h2>
      </div>
        <ul>
          {listItem}
        </ul>
    </div>
 </>
}

export default withRouter(TeamSchedule);
