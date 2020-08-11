import axios from 'axios';

interface getReposParams {
    org: string;
    perPage?: number;
    page?: number;
}

export const getRepos = (opt: getReposParams) => axios.get(`https://api.github.com/search/repositories`, {
    params: {
        q: `org:${opt.org}`,
        per_page: opt.perPage,
        page: opt.page
    }
})