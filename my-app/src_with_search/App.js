import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Periods from './components/Periods/Periods'
import Leagues from './components/Leagues/Leagues';
import Teams from './components/Teams/Teams';
import TeamSchedule from './components/Teams/TeamSchedule/TeamSchedule';
import LeagueSchedule from './components/Leagues/LeagueSchedule/LeagueSchedule';
import Navbar from './components/Navbar/Navbar';
import state from './state';


import leaguesData from './data/league';
import leagueTeamsData from './data/TeamssOfLeague149';
import leagueScheduleData from './data/EventsOfLeague177';
import teamScheduleData from './data/EventsOfTeam2618';

import { BrowserRouter, Route } from 'react-router-dom';

import { ReactComponent as LogoLeagues } from './img/league.png';
import { ReactComponent as LogoTeams } from './img/teams.png';
import { ReactComponent as LogoSchedule } from './img/schedule.png';

const SECTIONS = [
    { title: 'Список лиг',  href: '/leagues', Icon: LogoLeagues },
    { title: 'Расписание лиги' , href: '/leagueSchedule', Icon:LogoSchedule  },
    { title: 'Команды',  href: '/teams', Icon: LogoTeams },
    { title: 'Расписание команды', href: '/teamSchedule', Icon: LogoSchedule },
  ];

const App = (props ) => { 

    return(
      <BrowserRouter>    
        <div className="app-wrapper">
         <Header/> 
         <Navbar period={props.state.period} sections={SECTIONS}/> 
         <Periods period={props.state.period} setPeriod={props.setPeriod}/>
         <Leagues Data={leaguesData} period={props.state.period}  sections={SECTIONS}/>
          <div className="app-wrapper-content">
           
              <Route path='/leagueSchedule' render={ () => <LeagueSchedule Data={leagueScheduleData}/>}/>
              <Route path='/teams' render={ () => <Teams Data={leagueTeamsData}/>}/>
              <Route path='/teamSchedule' render={ () => <TeamSchedule Data={teamScheduleData}/>}/>
          </div>
        </div>
      </BrowserRouter>  
    );//return  
 
}//class

export default App;
