import React, { Component } from 'react';
import  Leagues  from './Leagues';

class LeaguesContainer  extends React.Component {

	componentDidMount(){
		axios.get('https://apiv2.apifootball.com/?action=get_leagues&APIkey=e2cbc09e57d33b6ab8d17dd2154867fe96ba48b56309658c4b45e82ce6d3cfd9')
		      .then(response => {
		      	this.props.toggleIsFetching(false);
		      	this.props.setUsers(response.data.items);
		      	this.props.setTotalUsersCount(response.data.totalCount);
		      }) ;
	}

	render() {console.log("121");
		return (
			<Leagues {...this.props}/>
			)
	}
}

export default LeaguesContainer;