import React, { Component } from 'react';
import { connect } from "react-redux";
import Teams from './Teams';
import TeamSchedule from './TeamSchedule/TeamSchedule';
import { withRouter } from 'react-router-dom';
import {setTeamCreator} from "../../redux/teams-reducer";
import {setListTeamsCreator} from "../../redux/teams-reducer";
import {setLeagueCreator} from "../../redux/leagues-reducer";
import {compose} from "redux";
import Preloader from '../common/Preloader/Preloader';

class TeamsContainer extends React.Component {
	
	componentDidMount(){
    let league_id = this.props.match.params.league_id;
		let API_KEY = process.env.REACT_APP_USER_TOKEN;
    	
   	let year = this.props.year;
   
   	const apiUrl = "https://api.football-data.org/v2/competitions/"+league_id+"/teams?season="+year;

   	fetch(apiUrl, {
   		method: 'GET',
   		headers: {
     	  'X-Auth-Token': API_KEY
   		}
   	})
    .then((response) => response.json())
    .then((response) => {
      this.props.setListTeamsCreator(response.teams);
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

  selTeam = (text) => {
      this.props.setTeamCreator(text);
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
      { this.props.isFetching ? <Preloader />: null} 
			  <Teams teams = {this.props.listTeams} league_name={this.props.league_name} year={this.props.year} search={this.props.search} selTeam={this.selTeam}/>
		</>
	}
}

let mapStateToProps = (state) => ({
    league_name : state.leagues.league.name,  
    listTeams : state.teams.listTeams,
    year:state.year,
    search:state.search,
    isFetching: state.teams.isFetching
})

export default compose(connect(mapStateToProps,{setTeamCreator}),
                       connect(mapStateToProps,{setListTeamsCreator}),
                       connect(mapStateToProps,{setLeagueCreator}),
                       withRouter
)(TeamsContainer);

