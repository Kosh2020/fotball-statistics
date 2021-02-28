import * as axios from "axios";

export const getLeagues = () => {
	return axios.get('http://localhost:3012/league')
}