import { getReposAction } from 'actions/repos.actions';
import { REPOS_FETCH_REQUESTED } from 'actions/actionTypes';


describe('test action creators', () => {
    it('getReposAction returns correct action', () => {
        const data = {org: 'test'};
        const expectedAction = {
            type: REPOS_FETCH_REQUESTED,
            data,
        }
        expect(getReposAction(data)).toEqual(expectedAction)
    })
})