import { FETCH_WEATHER, REMOVE_WEATHER } from '../actions/index.js';

// initial state set to empty array because we'll append data of new cities to this array
export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
		 	// same as state.concat([action.playload.data])
		 	return [action.payload.data, ...state];

		 case REMOVE_WEATHER:
		 	return state.filter(cityObj => (cityObj.city.name !== action.payload));
	}
	return state;
}