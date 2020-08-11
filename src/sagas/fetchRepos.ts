import { call, put, takeLatest } from 'redux-saga/effects';
import { REPOS_FETCH_SUCCEEDED, REPOS_FETCH_FAILED, REPOS_FETCH_REQUESTED } from 'actions/actionTypes';
import { getRepos } from 'api/api';

interface fetchReposAction {
    type: string;
    data: {
        org: string;
        perPage?: number;
        page?: number;
    }
}

 export function* fetchRepos(action: fetchReposAction) {
    try {
        const response = yield call(getRepos, action.data);
        const data = response.data;
        yield put({type: REPOS_FETCH_SUCCEEDED, repos: data.items, count: data.total_count});
    } catch (e) {
        yield put({type: REPOS_FETCH_FAILED, message: e.message});
    }
}

function* fetchReposSaga() {
    yield takeLatest(REPOS_FETCH_REQUESTED, fetchRepos);
}

export default fetchReposSaga
