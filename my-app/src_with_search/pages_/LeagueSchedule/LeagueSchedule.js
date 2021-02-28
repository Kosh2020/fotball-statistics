import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import  leagueSchedule  from '../../data/EventsOfLeague177';
import  Periods  from '../../components/Periods/Periods'

 const TITLE = 'Расписание лиги Championship'


const LeagueSchedule = () => {
	return ( <div className='Home'>
           <ul>
            <h1>{TITLE}</h1>
            <Periods/>
           
            {leagueSchedule.map(item => (  
              <li key={item.match_id}>Дата:{item.match_date} {item.match_time}       (Дом:{item.match_hometeam_name})   :   (Гость:{item.match_awayteam_name})
              </li> 
            ))}
          </ul>
        </div>
	)  
}

export default LeagueSchedule;