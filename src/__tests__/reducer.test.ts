import { REPOS_FETCH_SUCCEEDED, REPOS_FETCH_FAILED, REPOS_FETCH_REQUESTED } from 'actions/actionTypes';
import reposListReducer from 'reducers/repos.reducer';

const initialState = {
    items: [],
    count: 0,
    isLoading: false,
}

describe('test reducer', () => {
    const reducer = reposListReducer;

    it('starting fetching works', () => {
        const action = {type: REPOS_FETCH_REQUESTED};
        expect(reducer(initialState, action)).toEqual({...initialState, isLoading: true})
    })

    it('fetch succeeded', () => {
        const actionData = {repos: ['test'], count: 5}
        const action = {type: REPOS_FETCH_SUCCEEDED, ...actionData};
        expect(reducer(initialState, action)).toEqual({...initialState, items: actionData.repos, count: actionData.count})
    })

    it('fetch failed', () => {
        const action = {type: REPOS_FETCH_FAILED};
        const testState = {items: ['test'], count: 2, isLoading: true}
        expect(reducer(testState, action)).toEqual(initialState)
    })
})