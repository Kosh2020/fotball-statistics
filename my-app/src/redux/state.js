const SET_PERIOD='SET-PERIOD';
const SET_LEAGUE='SET-LEAGUE'

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
		if (action.type === SET_PERIOD){
			this._state.period=action.period;
			this._callSubscriber(this._state);
			console.log("SET-PERIOD="+action.period);
		} else if (action.type === SET_LEAGUE){
  			this._state.league=action.league;
			this._callSubscriber(this._state);
			console.log("SET-LEAGUE="+action.league);
		}
	}

}

export const setPeriodCreator = (text) => ({ type: SET_PERIOD, period:text })

export const setLeagueCreator = (text) => ({ type: SET_LEAGUE, league:text })

export default store;
window.store = store;