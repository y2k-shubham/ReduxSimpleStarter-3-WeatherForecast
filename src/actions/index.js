import axios from 'axios';

const API_KEY = '8d07cbce893311f868b847a13cbbcb1c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const REMOVE_WEATHER = 'REMOVE_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},in`;
	const request = axios.get(url);

	/* here payload is a promise, and as told in lecture 59, redux-promise (middleware) stops this action
	 it then dispatches a new action with payload set to resolved promise (result of the promise),
	 once the same is resovled (finishes fetching)

	 This gives us the ability to write normal synchronous-appearing code, without having to deal with the
	 complexity of asynch tasks, which are handled by ReduxPromise middleware
	*/
	return ({
		type: FETCH_WEATHER, 
		payload: request, 
	});
}

export function removeWeather(city) {
	return ({
		type: REMOVE_WEATHER,
		payload: city,
	});
}