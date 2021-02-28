import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Years from './components/common/Year/Year';
import Search from './components/common/Search/Search';
import {Routes} from './components/routes';

const SECTIONS = [
    { name: 'league_href', title: 'Список лиг', href: '/leagues'},
    { name: 'leagueSchedule_href',title: 'Расписание лиги' ,  href: '/leagueSchedule'  },
    { name: 'teams_href',title: 'Команды',  href: '/teams' },
    { name: 'teamSchedule_href',title: 'Расписание команды',  href: '/teamSchedule' },
  ];

const App = (props) => { 

  return<>       
    <div className="app-wrapper">
      <Header/> 
      <Navbar  year={props.state.year} league_id={props.state.leagues.league.id} team_id={props.state.teams.team.id} sections={SECTIONS}/> 
      <div className="filters"> 
        <Years year={props.state.year} dispatch={props.dispatch}/>
        <Search  dispatch={props.dispatch}/>
      </div>
      <div className="app-wrapper-content">
        <Routes store={props.store} />
      </div>    
    </div>
  </>  
}

export default App;
