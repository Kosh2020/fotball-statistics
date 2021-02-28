import React, { Component } from 'react';
import { connect } from "react-redux";
import {compose} from "redux";
import moment from 'moment';
import Period from '../../common/Period/Period';
import TeamSchedule from './TeamSchedule';
import { withRouter } from 'react-router-dom';
import {setTeamSchedule} from "../../../redux/teams-reducer";
import {setLeagueCreator} from "../../../redux/leagues-reducer";
import {setStartDatePeriod} from "../../../redux/period-reducer";
import {setEndDatePeriod} from "../../../redux/period-reducer";

class TeamScheduleContainer extends React.Component {

  apiToState =()=>{
    let team_id = this.props.match.params.team_id;
    let API_KEY = process.env.REACT_APP_USER_TOKEN;
    let year = this.props.year;
    let dateFrom = moment(this.props.startDate).format('YYYY-MM-DD')
    let dateTo = moment(this.props.endDate).format('YYYY-MM-DD')
    
    const apiUrl = "https://api.football-data.org/v2/teams/"+team_id+"/matches?dateFrom="+dateFrom+"&dateTo="+dateTo;
    fetch(apiUrl, {
      method: 'GET',
      headers: {
      'X-Auth-Token': API_KEY
      }
    })
    .then((response) => response.json())
    .then((response) => {
      this.props.setTeamSchedule(response.matches);
     if (this.props.league_id !== this.props.match.params.league_id)
        {let league={id:response.competition.code, name: response.competition.name};
        this.props.setLeagueCreator(league);}
        //this.setState({isLoaded: true});
    })
    .then((error) => {
      this.setState({false: true});
      this.setState({error});
    })      
    .catch(error => console.log('parsing failed', error))
  }	

  componentDidMount(prevProps) {
    this.apiToState();
  }

  componentDidUpdate(prevProps) {
    if ((this.props.startDate !== prevProps.startDate)||(this.props.endDate !== prevProps.endDate)||((this.props.search !== prevProps.search))) {
      this.apiToState();
    }
  }

  selStartDate = (date) => {
    this.props.setStartDatePeriod(date);
  }

  selEndDate = (date) => {
    this.props.setEndDatePeriod(date);
  }

  render() {
	 /*if (error) {
  	 return <div>Error: {error.message}</div>;
    } 
	 else if (!loaded) {
	 return <div>Loading...</div>;
	 } 
	 else {*/
    return <>
      <Period store={this.props.store} />
		  <TeamSchedule  league_name={this.props.league_name}  teamSchedule={this.props.teamSchedule} team_name={this.props.team_name} year = {this.props.year} startDate = {this.props.startDate} endDate = {this.props.endDate} selStartDate = {this.selStartDate} selEndDate = {this.selEndDate} search={this.props.search}/>
	 </>
  }
}

let mapStateToProps = (state) => ({
    teamSchedule : state.teams.teamSchedule,
    league_name : state.leagues.league.name,
    league_id : state.leagues.league.id,
    team_name : state.teams.team.name,
    team_id : state.teams.team.id,
    year:state.year,
    startDate: state.period.startDate,
    endDate: state.period.endDate,
    search:state.search
})

export default compose(connect(mapStateToProps,{setTeamSchedule}),
               connect(mapStateToProps,{setLeagueCreator}),
               connect(mapStateToProps,{setStartDatePeriod}),
               connect(mapStateToProps,{setEndDatePeriod}),
               withRouter
)(TeamScheduleContainer); 
