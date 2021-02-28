import React from 'react'
import { Route, Redirect } from 'react-router-dom';

import LeaguesContainer from './Leagues/LeaguesContainer';
import TeamsContainer from './Teams/TeamsContainer';
import TeamScheduleContainer from './Teams/TeamSchedule/TeamScheduleContainer';
import LeagueScheduleContainer from './Leagues/LeagueSchedule/LeagueScheduleContainer';

import leaguesData from '../data/league';
import leagueTeamsData from '../data/TeamsOfLeague149';
import leagueScheduleData from '../data/EventsOfLeague177';
import teamScheduleData from '../data/EventsOfTeam2618';

//<Redirect from='/' to="/leagues"/>
export const Routes = (props) => { 
	return(
  		<div>
    		<Route path='/leagues' render={ () => <LeaguesContainer  store={props.store}/> }/>
    		<Route path='/leagueschedule/:league_id' render={ () => <LeagueScheduleContainer  store={props.store} Data={leagueScheduleData} />}/>
    		<Route path='/teams/:league_id' render={ () => <TeamsContainer store={props.store} Data={leagueTeamsData}/>}/>
    		<Route path='/teamschedule/:league_id/:team_id' render={ () => <TeamScheduleContainer store={props.store} Data={teamScheduleData}/>}/>
    	</div>)
}

