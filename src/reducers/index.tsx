import {combineReducers} from 'redux'
import {dailyOnlineReducer} from "./DailyOnlineReducer";
import {gamesHistoryReducer} from "./GamesHistoryReducer";
import {weeklyOnlineReducer} from "./WeeklyOnlineReducer";
import {gameHistoryStatsReducer} from "./GameHistoryStatsReducer";
import {newsPageReducer} from "./NewsReducer";
import {weeklyLaddersListReducer} from "./WeeklyLaddersListReducer";
import {weeklyLadderReducer} from './WeeklyLadderReducer';
import {SSFReducer} from "./SSFReducer";

export default combineReducers({
    dailyOnlineReducer,
    gamesHistoryReducer,
    weeklyOnlineReducer,
    gameHistoryStatsReducer,
    newsPageReducer,
    weeklyLaddersListReducer,
    weeklyLadderReducer,
    SSFReducer
})