import React from 'react';
import  leagueSchedule  from '../../data/EventsOfTeam2618';
import  Periods  from '../../components/Periods/Periods'

const TITLE = 'Расписание команды Swansea';

 
const TeamSchedule = () => {
	return (
		<div className='Home'>
           <ul>
            	<h1>{TITLE}</h1>
            	<Periods/>
            	{leagueSchedule.map(item => (  
              	  <li key={item.match_id}>Дата:{item.match_date} {item.match_time}       ((Гость:{item.match_awayteam_name})
              	  </li> 
            	))}
           </ul>
        </div>
	)
}

export default TeamSchedule;