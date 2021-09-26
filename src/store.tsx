import {createStore} from 'redux';

import reducer from './reducers/index'

// const INITIAL_STATE = {
//     data: Array<DailySnapshot>()
// };
//
// function dailyOnline(state = INITIAL_STATE, action: any) {
//     switch (action.type) {
//         case 'SET_DAILY_ONLINE':
//             return {...state, data: action.payload};
//         default:
//             return state;
//     }
// }

export default createStore(reducer);