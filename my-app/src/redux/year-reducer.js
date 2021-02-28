const SET_YEAR='SET-YEAR';

let initialState='2019';

const yearReducer = (state = initialState, action) => {
	if (action.type === SET_YEAR){
		return action.year;
		console.log("SET-YEAR="+action.year);
	}
	return state;
}

export const setYearCreator = (text) => ({ type: SET_YEAR, year:text })

export default yearReducer;