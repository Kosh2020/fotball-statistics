import React from 'react'
import { Route } from 'react-router-dom';
import LeaguesContainer from './Leagues/LeaguesContainer';
import TeamsContainer from './Teams/TeamsContainer';
import TeamScheduleContainer from './Teams/TeamSchedule/TeamScheduleContainer';
import LeagueScheduleContainer from './Leagues/LeagueSchedule/LeagueScheduleContainer';

export const Routes = (props) => { 
	return<>
  		<div>
    		<Route path='/leagues' render={ () => <LeaguesContainer  store={props.store}/> }/>
    		<Route path='/leagueschedule/:league_id' render={ () => <LeagueScheduleContainer  store={props.store} />}/>
    		<Route path='/teams/:league_id' render={ () => <TeamsContainer store={props.store} />}/>
    		<Route path='/teamschedule/:league_id/:team_id' render={ () => <TeamScheduleContainer store={props.store} />}/>
    	</div>
    </>
}

