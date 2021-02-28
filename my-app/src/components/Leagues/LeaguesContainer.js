import React, { Component } from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';
import Leagues from './Leagues';
import {setLeagueCreator} from "../../redux/leagues-reducer";

class LeaguesContainer  extends React.Component {
	
	selLeague = (text) => {
    	this.props.setLeagueCreator(text);
    }

	render() {
		return (
			<Leagues leagues = {this.props.listLeagues} year={this.props.year} search={this.props.search} selLeague={ this.selLeague }/>
			)
	}
}

let mapStateToProps = (state) => ({
    listLeagues : state.leagues.listLeagues,
    year:state.year,
    search:state.search
})

export default compose(connect(mapStateToProps,{setLeagueCreator}),
                       withRouter
)(LeaguesContainer);

