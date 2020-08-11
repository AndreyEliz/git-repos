import { REPOS_FETCH_SUCCEEDED, REPOS_FETCH_FAILED, REPOS_FETCH_REQUESTED } from 'actions/actionTypes';
import { RootStore } from 'reducers';

interface ReposReducerHashMap {
    [actionType: string]: () => reposState 
}

export interface reposState {
    items: any[];
    count: number;
    isLoading: boolean;
}

const initialState: reposState = {
    items: [],
    count: 0,
    isLoading: false,
}

const reposListReducer = (state=initialState, action: any) => {
    const reducers: ReposReducerHashMap = {
        [REPOS_FETCH_SUCCEEDED]: () => ({...state, items: action.repos, count: action.count, isLoading: false}),
        [REPOS_FETCH_FAILED]: () => ({...state, items: [], count: 0, isLoading: false}),
        [REPOS_FETCH_REQUESTED]: () => ({...state, isLoading: true})
    }

    return (reducers[action.type]  && reducers[action.type]()) || state
};

export const selectReposList = (store: RootStore) => store.repos.items
export const selectReposCount = (store: RootStore) => store.repos.count
export const selectIsDataLoading = (store: RootStore) => store.repos.isLoading

export default reposListReducer;
