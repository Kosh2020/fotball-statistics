//import leagueScheduleData from '../data/EventsOfLeague177';
const SET_LEAGUE='SET-LEAGUE';
const SET_LIST_LEAGUE='SET-LIST-LEAGUE';
const SET_LEAGUE_SCHEDULE='SET-LEAGUE-SCHEDULE';
const TOGGLE_IS_FETCHING_LIST_LEAGUES = 'TOGGLE_IS_FETCHING_LIST_LEAGUES';
const TOGGLE_IS_FETCHING_LEAGUE_SCHEDULE = 'TOGGLE_IS_FETCHING_LEAGUE_SCHEDULE';


let initialState={
  league:{
    id:"",
    name:""
  },
  listLeagues : [
  { id: 1,leagueCode: 'BL1', leagueName: '1. Bundesliga'},
  { id: 2,leagueCode: 'BL2', leagueName: '2. Bundesliga'},
  { id: 3,leagueCode: 'BL3', leagueName: '3. Bundesliga'},
  { id: 4,leagueCode: 'DFB', leagueName: 'Dfb-Cup'},
  { id: 5,leagueCode: 'PL',  leagueName: 'Premiere League'},    
  { id: 6,leagueCode: 'EL1', leagueName: 'League One'},
  { id: 7,leagueCode: 'ELC', leagueName: 'Championship'},
  { id: 8,leagueCode: 'FAC', leagueName: 'FA-Cup'},
  { id: 9,leagueCode: 'SA',  leagueName: 'Serie A'},
  { id: 10,leagueCode: 'SB',  leagueName: 'Serie B'},
  { id: 11,leagueCode: 'PD',  leagueName: 'Primera Division'},
  { id: 12,leagueCode: 'SD',  leagueName: 'Segunda Division'},
  { id: 13,leagueCode: 'CDR', leagueName: 'Copa del Rey'},
  { id: 14,leagueCode: 'FL1', leagueName: 'Ligue 1'},
  { id: 15,leagueCode: 'FL2', leagueName: 'Ligue 2'},
  { id: 16,leagueCode: 'DED', leagueName: 'Eredivisie'},
  { id: 17,leagueCode: 'PPL', leagueName: 'Primeira Liga'},
  { id: 18,leagueCode: 'GSL', leagueName: 'Super League'},
  { id: 19,leagueCode: 'CL', leagueName: 'Champions-League'},
  { id: 20,leagueCode: 'EL', leagueName: 'UEFA-Cup'},
  { id: 21,leagueCode: 'EC', leagueName: 'European-Cup of Nations'},
  { id: 22,leagueCode: 'WC', leagueName: 'World-Cup'}
  ],
  isFetching: false,
  leagueSchedule:{
    isFetching: false,
    listSchedule:null
  } };

const leaguesReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_LEAGUE:{
      return {
        ...state,
        league: action.league
      }
    }
    case SET_LIST_LEAGUE:{
      return {
        ...state,
        listLeagues: action.listLeagues
      }
    }
    case SET_LEAGUE_SCHEDULE:{
      return {
        ...state,
        leagueSchedule:{
          ...state.leagueSchedule,
          listSchedule:action.listSchedule
        }
      }
    }
    case TOGGLE_IS_FETCHING_LIST_LEAGUES:{
      return {
        ...state,
        isFetching:action.isFetching
      }
    }

    case TOGGLE_IS_FETCHING_LEAGUE_SCHEDULE:{
      return {
        leagueSchedule:{
        ...state.leagueSchedule,
        isFetching:action.isFetching
        }
      }
    }
  default:
      return state;
  }
}

export const setLeagueCreator = (league) => ({ type: SET_LEAGUE, league:league });
export const setlistLeaguesCreator = (listLeagues) => ({ type: SET_LIST_LEAGUE, listLeagues });
export const setLeagueSchedule = (listSchedule) => ({ type: SET_LEAGUE_SCHEDULE, listSchedule });
export const setLeaguesFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING_LIST_LEAGUES, isFetching });
export const setLeagueScheduleFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING_LEAGUE_SCHEDULE, isFetching });

export default leaguesReducer;