import { combineReducers, createStore } from "redux";
import yearReducer from './year-reducer';
import periodReducer from './period-reducer';
import searchReducer from './search-reducer';
import leaguesReducer from './leagues-reducer';
import teamsReducer from './teams-reducer';

let reducers = combineReducers({
	year:yearReducer,
	period:periodReducer,
	search:searchReducer,
	leagues:leaguesReducer,
	teams:teamsReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
