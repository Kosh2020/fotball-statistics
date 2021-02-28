import periodReducer from './period-reducer';
import leagueReducer from './league-reducer';

let store = {
	_state : {
  		period:'2019',
  		league: null
	},	
	_callSubscriber() {
		console.log('State changed');
	},
	getState(){
		return this._state;
	},
	subscribe(observer){
		this._callSubscriber = observer;
	},
/*	setPeriod(period){
  		this._state.period=period;
		this._callSubscriber(this._state);
	},
	setLeague(league){
  		this._state.league=league;
		this._callSubscriber(this._state);
	},	*/
	dispatch(action) {
		this._state.period.periodReducer(this._state.period, action);
		this._state.league.leagueReducer(this._state.league, action);

		this._callSubscriber(this._state);
	}

}


export default store;
window.store = store;