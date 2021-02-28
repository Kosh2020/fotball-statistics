import React, {useState, useEffect} from 'react';

const TITLE = 'Расписание лиги Championship'

const LeagueSchedule = (props) => {
  const [dataLeaguesSchedule, setDateLeaguesSchedule] = useState([])

  useEffect( () => {
    fetch('https://apiv2.apifootball.com/?action=get_events&from=2020-04-01&to=2021-06-11&league_id=177&APIkey=e2cbc09e57d33b6ab8d17dd2154867fe96ba48b56309658c4b45e82ce6d3cfd9')
      .then((response) => {
        return response.json();
      })
      .then((data) => { setDateLeaguesSchedule(data);
      });
  
  },[] )

let Data = props.Data;
// let Data = dataLeaguesSchedule;
console.log(Data);  
	return ( <div className="content">
              <h1>{TITLE}</h1>
                <ul>    
                  {Data.map(item => (  
                   <li key={item.match_id}>Дата:{item.match_date} {item.match_time}       (Дом:{item.match_hometeam_name})   :   (Гость:{item.match_awayteam_name})
                   </li> 
                 ))}
          </ul>
        </div>
	)  
}

export default LeagueSchedule;