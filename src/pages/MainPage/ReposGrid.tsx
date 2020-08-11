import React from 'react';
import Grid, { Column } from 'components/Grid/Grid';
import { useSelector } from 'react-redux';
import { selectReposList, selectReposCount, selectIsDataLoading } from 'reducers/repos.reducer';
import Loading from 'components/Loading/Loading';

interface ReposGridProps {
    onPaginate(page: number): void;
    onPerPageChange(perPage: number): void;
    perPage: number;
    page: number;
}

const columns: Column[] = [
    { id: 'name', label: 'Name'},
    { id: 'url', label: 'URL' },
    { id: 'forks_count', label: 'Forks count' },
    { id: 'watchers_count', label: 'Watchers count' },
    { id: 'stargazers_count', label: 'Stargazers count' },
];

const ReposGrid: React.FC<ReposGridProps> = React.memo(({onPaginate, onPerPageChange, perPage, page}) => {
    
    const rows = useSelector(selectReposList)
    const totalRows = useSelector(selectReposCount)
    const isLoading = useSelector(selectIsDataLoading)

    return (
        <>
        {isLoading ?
        <Loading/>
        :
        <Grid 
            columns={columns}
            rows={rows}
            onPaginate={onPaginate}
            onPerPageChange={onPerPageChange}
            perPage={perPage}
            totalRows={totalRows}
            page={page}
        />
        }
        </>
    );
})

export default ReposGrid;
