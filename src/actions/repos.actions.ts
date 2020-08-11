import { REPOS_FETCH_REQUESTED } from "./actionTypes";

interface getReposActionParams {
    org: string;
    perPage?: number;
    page?: number;
}

export const getReposAction = (data: getReposActionParams) => ({
    type: REPOS_FETCH_REQUESTED,
    data
})