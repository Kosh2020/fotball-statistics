import React from 'react';
import  leagueSchedule  from '../../data/TeamssOfLeague149';
 
const TITLE = 'Команды лиги Championship';

const Ttt = () => {
	return(
	 <div className='Home'>
           <ul>
            <h1>{TITLE}</h1>
            {leagueSchedule.map(item => (  
              <li key={item.match_id}>{item.team_name}
              </li> 
            ))}
          </ul>
        </div>)
			
}

export default Ttt;