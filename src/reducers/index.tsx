import { combineReducers } from 'redux'
import {dailyOnlineReducer} from "./DailyOnlineReducer";
import {gamesHistoryReducer} from "./GamesHistoryReducer";
import {weeklyOnlineReducer} from "./WeeklyOnlineReducer";

export default combineReducers({
    dailyOnlineReducer,
    gamesHistoryReducer,
    weeklyOnlineReducer
})