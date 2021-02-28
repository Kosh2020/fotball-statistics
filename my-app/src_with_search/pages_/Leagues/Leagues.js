import React, { Component } from 'react';
import s from './Leagues.css';
import  leaguesData  from '../../data/league';
import  Periods  from '../../components/Periods/Periods'
import  Search  from '../../components/Search/Search'

const TITLE = 'Список лиг';


const Leagues = (props) => {
  
	return( <div className='Home'><h1>{props.period}</h1>
           <ul>
            <h1>{TITLE}</h1>
            <Periods/>
            <Search/>

            <select >
            <option>2022</option>
            <option>2023</option>
            </select>
            {leaguesData.map(item => (  
              <li key={item.league_id}>
                {item.league_name}
              </li> 
            ))}
          </ul>
        </div>
  )//return      
}

export default Leagues;