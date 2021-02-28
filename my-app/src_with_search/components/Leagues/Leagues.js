import React, {useState, useEffect} from 'react';
import s from './Leagues.module.css';
import  League  from './League/League';




const TITLE = 'Список лиг';

const Leagues = (props) => {
	const [dataLeagues, setDateLeagues] = useState([]);
	const [search, setSearch] = useState('');
	const [filteredDataLeagues, setFilteredDataLeagues] = useState([]);
	useEffect( () => {
		fetch('https://apiv2.apifootball.com/?action=get_leagues&APIkey=e2cbc09e57d33b6ab8d17dd2154867fe96ba48b56309658c4b45e82ce6d3cfd9')
  		.then((response) => {
    		return response.json();
  		})
  		.then((data) => { setDateLeagues(data);
  		});
	
	},[] )

	useEffect( () =>{
		setFilteredDataLeagues(
			Data.filter( League => {
 				return League.league_name.toLowerCase().includes(search.toLowerCase())
 			})
			)
	},[search])

let Data = props.Data;
// let Data = dataLeagues;
console.log(Data);
 



let ListLeagues=filteredDataLeagues.map(item => ( 
               < League league_id={ item.league_id } league_name={ item.league_name } period={ props.period }/> ));
  return( <div >		
            <h2>{ TITLE }</h2>
            <h2>{ props.period }</h2>
            <input type="text" placeholder="Search" onChange={ e => setSearch(e.target.value)} />
            <div className={ s.list_items }>         
               { ListLeagues }
            </div>
        </div>
  )//return      
}

export default Leagues;