const SET_SEARCH='SET-SEARCH';

let initialState='';

const listLeaguesReducer = (state = initialState, action) => {
if (action.type === SET_SEARCH){
  	return action.search;
	console.log("SET-SEARCH="+action.listLeague);
}
return state;
}

export const setSearchCreator = (text) => ({ type: SET_SEARCH, search:text });

export default listLeaguesReducer;