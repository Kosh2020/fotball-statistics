import React, {useState, useEffect} from 'react';
import s from './TeamSchedule.module.css';

const TITLE = 'Расписание команды Swansea';
 
const TeamSchedule = (props) => {
  const [dataTeamSchedule, setDateTeamSchedule] = useState([])

  useEffect( () => {
    fetch('https://apiv2.apifootball.com/?action=get_events&from=2020-04-01&to=2021-06-11&league_id=177&team_id=2615&APIkey=e2cbc09e57d33b6ab8d17dd2154867fe96ba48b56309658c4b45e82ce6d3cfd9')
      .then((response) => {
        return response.json();
      })
      .then((data) => { setDateTeamSchedule(data);
      });
  
  },[] )

//let Data = props.Data;
 let Data = dataTeamSchedule;
console.log(Data);  
  return (
    <div >
           <ul>
              <h1>{TITLE}</h1>
              {props.Data.map(item => (  
                  <li key={item.match_id}>Дата:{item.match_date} {item.match_time}       (Гость:{item.match_awayteam_name})
                  </li> 
              ))}
           </ul>
        </div>
  )
}

export default TeamSchedule;