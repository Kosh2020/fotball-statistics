const SET_START_DATE_PERIOD='SET-START-DATE-PERIOD';
const SET_END_DATE_PERIOD='SET-END-DATE-PERIOD';

let initialState={ startDate:new Date("2019/01/01"),
    			   endDate:new Date("2019/12/31")};

const periodReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_START_DATE_PERIOD:{
      return {
        ...state,
          startDate:action.startDate     
      }
    }
    case SET_END_DATE_PERIOD:{
      return {
        ...state,
          endDate:action.endDate       
      }
    }
   }
	return state;
}

export const setStartDatePeriod = (startDate) => ({ type: SET_START_DATE_PERIOD, startDate });
export const setEndDatePeriod = (endDate) => ({ type: SET_END_DATE_PERIOD, endDate });

export default periodReducer;