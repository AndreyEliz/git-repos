import { put, takeLatest } from 'redux-saga/effects';
import { REPOS_FETCH_SUCCEEDED, REPOS_FETCH_FAILED, REPOS_FETCH_REQUESTED } from 'actions/actionTypes';
import fetchReposSaga, { fetchRepos } from "sagas/fetchRepos";

describe('test saga', () => {
    it('getReposAction returns correct action', () => {
        const saga = fetchReposSaga();
        expect(saga.next().value).toEqual(takeLatest(REPOS_FETCH_REQUESTED, fetchRepos));
        expect(saga.next().done).toBeTruthy();
    })

    it('should dispatch correct action on request succeeded', () => {
        const mockResponse = {data:{items: [1, 2, 3], total_count: 5}};
        const requestOptions = {type: REPOS_FETCH_REQUESTED, data:{org: ''}};
        const saga = fetchRepos(requestOptions);
        saga.next()
        expect(saga.next(mockResponse).value).toEqual(put({
            type:REPOS_FETCH_SUCCEEDED, 
            repos: mockResponse.data.items, 
            count: mockResponse.data.total_count
        }))
        expect(saga.next().done).toBeTruthy();
    })

    it('should dispatch correct action on request failure', () => {
        debugger;
        const requestOptions = {type: REPOS_FETCH_REQUESTED, data:{org: ''}};
        const saga = fetchRepos(requestOptions);
        saga.next();
        expect(saga.throw(new Error('error')).value).toEqual(put({
            type: REPOS_FETCH_FAILED, 
            message: 'error'
        }))
        expect(saga.next().done).toBeTruthy();
    })
})