import React, {useState, useEffect} from 'react';
import s from './Teams.module.css';
import  Team  from './Team/Team';
 
const TITLE = 'Команды лиги Championship';

const Teams = (props) => {
	const [dataTeams, setDateTeams] = useState([])

	useEffect( () => {
		fetch('https://apiv2.apifootball.com/?action=get_teams&league_id=148&APIkey=e2cbc09e57d33b6ab8d17dd2154867fe96ba48b56309658c4b45e82ce6d3cfd9')
  		.then((response) => {
    		return response.json();
  		})
  		.then((data) => { setDateTeams(data);
  		});
	
	},[] )

//let Data = props.Data;
 let Data = dataTeams;
console.log(Data);
let ListTeams=Data.map(item => ( 
               < Team team_id={item.team_key} team_name={item.team_name}/> ));  
	return(
	 <div >
           <ul>
             <h1>{TITLE}</h1>
             { ListTeams }
          </ul>
        </div>)
			
}

export default Teams;