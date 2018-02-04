import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch(action.type) {
	case FETCH_WEATHER:
		//Ensure that you return a whole new instance of state
		return state.concat([action.payload.data]);
		//This ES6 line works too:
		//return [action.payload.data, ...state];
	}
	return state;
}