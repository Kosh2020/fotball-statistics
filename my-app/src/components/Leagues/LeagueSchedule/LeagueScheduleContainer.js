import React, { Component } from 'react';
import { connect } from "react-redux";
import moment from 'moment';
import LeagueSchedule from './LeagueSchedule';
import Period from '../../common/Period/Period';
import { withRouter } from 'react-router-dom';
import {setLeagueSchedule} from "../../../redux/leagues-reducer";
import {setlistLeaguesCreator} from "../../../redux/leagues-reducer";
import {setLeagueCreator} from "../../../redux/leagues-reducer";
import {compose} from "redux";

class LeagueScheduleContainer extends React.Component {

  apiToState =()=>{
    let league_id = this.props.match.params.league_id;
    let API_KEY = process.env.REACT_APP_USER_TOKEN;
    let year = this.props.year;
    let dateFrom = moment(this.props.startDate).format('YYYY-MM-DD')
    let dateTo = moment(this.props.endDate).format('YYYY-MM-DD')
    const apiUrl = "https://api.football-data.org/v2/competitions/"+league_id+"/matches?dateFrom="+dateFrom+"&dateTo="+dateTo;

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-Auth-Token': API_KEY
      }
    })
    .then((response) => response.json())
    .then((response) => {
      this.props.setLeagueSchedule(response.matches);
      if (this.props.league_id !== this.props.match.params.league_id){
        let league={id:response.competition.code, name: response.competition.name};
        this.props.setLeagueCreator(league);
      }
    })
    .then((error) => {
      this.setState({false: true});
      this.setState({error});
    })      
    .catch(error => console.log('parsing failed', error))
  }
	
  componentDidMount() {
    this.apiToState();
  }

	componentDidUpdate(prevProps) {
    if ((this.props.league_id !== this.props.match.params.league_id)||(this.props.startDate !== prevProps.startDate)||(this.props.endDate !== prevProps.endDate)) {
      this.apiToState();
    }
  }	

  render() {
	  return <>
      <Period store={this.props.store} />
			<LeagueSchedule  leagueSchedule = {this.props.leagueSchedule} league_name={this.props.league_name} year={this.props.year} search={this.props.search} startDate={this.props.startDate} endDate={this.props.endDate}/>
		</>
	}
}

let mapStateToProps = (state) => ({
    leagueSchedule : state.leagues.leagueSchedule,
    league_id : state.leagues.league.id,
    league_name : state.leagues.league.name,
    year:state.year,
    startDate: state.period.startDate,
    endDate: state.period.endDate,
    search:state.search
})

export default compose( connect(mapStateToProps,{setLeagueCreator}),
                        connect(mapStateToProps,{setLeagueSchedule}),
                withRouter
)(LeagueScheduleContainer);
