import {combineReducers} from 'redux';
import reposListReducer, { reposState } from './repos.reducer';

export interface RootStore {
    repos: reposState
} 

const rootReducer = combineReducers({
    repos: reposListReducer
});

export default rootReducer;
