//import leagueScheduleData from '../data/EventsOfLeague177';
const SET_TEAM='SET-TEAM';
const SET_LIST_TEAMS='SET-LIST-TEAMS';
const SET_TEAM_SCHEDULE='SET-TEAM-SCHEDULE';
const SET_START_DATE_TEAM_SCHEDULE='SET-START-DATE-TEAM-SCHEDULE';
const SET_END_DATE_TEAM_SCHEDULE='SET-END-DATE-TEAM-SCHEDULE';

const TOGGLE_IS_FETCHING_LIST_TEAMS = 'TOGGLE_IS_FETCHING_LIST_TEAMS';
const TOGGLE_IS_FETCHING_TEAM_SCHEDULE = 'TOGGLE_IS_FETCHING_TEAM_SCHEDULE';


let initialState={
  team:{
    id:null,
    name:null
  },
  listTeams : null,
  isFetching: false,
  teamSchedule:{
    isFetching: false,
    listSchedule:null
  }
};

const teamsReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_TEAM:{
      return {
        ...state,
        team: action.team
      }
    }
    case SET_LIST_TEAMS:{
      return {
        ...state,
        listTeams: action.listTeams
      }
    }
    case SET_TEAM_SCHEDULE:{
      return {
        ...state,
        teamSchedule:{
          ...state.teamSchedule,
          listSchedule:action.listSchedule
        }        
      }
    }
    case SET_START_DATE_TEAM_SCHEDULE:{
      return {
        ...state,
        teamSchedule:{
          ...state.teamSchedule,
          startDate:action.startDate
        }        
      }
    }
    case SET_END_DATE_TEAM_SCHEDULE:{
      return {
        ...state,
        teamSchedule:{
          ...state.teamSchedule,
          endDate:action.endDate
        }        
      }
    }


    case TOGGLE_IS_FETCHING_LIST_TEAMS:{
      return {
        ...state,
        isFetching:action.isFetching
      }
    }

    case TOGGLE_IS_FETCHING_TEAM_SCHEDULE:{
      return {
        leagueSchedule:{
        ...state.teamSchedule,
        isFetching:action.isFetching
        }
      }
    }      
  default:
      return state;
  }}

export const setTeamCreator = (text) => ({ type: SET_TEAM, team:text });
export const setListTeamsCreator = (listTeams) => ({ type: SET_LIST_TEAMS, listTeams });
export const setTeamSchedule = (listSchedule) => ({ type: SET_TEAM_SCHEDULE, listSchedule });
export const setStartDateTeamSchedule = (startDate) => ({ type: SET_START_DATE_TEAM_SCHEDULE, startDate });
export const setEndDateTeamSchedule = (endDate) => ({ type: SET_END_DATE_TEAM_SCHEDULE, endDate });
export const setTeamsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING_LIST_TEAMS, isFetching });
export const setTeamScheduleFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING_TEAM_SCHEDULE, isFetching });

export default teamsReducer;