import React, { useState, useEffect } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import ReposGrid from './ReposGrid';
import { useDispatch } from 'react-redux';
import { getReposAction } from 'actions/repos.actions';

const MainPage = () => {
    const [query, setQuery] = useState('')
    const [pagination, setPagination] = useState({
        perPage: 5,
        page: 0
    })

    const dispatch = useDispatch()

    useEffect(() => {
        query && dispatch(getReposAction({
            org: query,
            ...pagination,
            page: pagination.page + 1 //github start counting from 1
        }))
    }, [dispatch, query, pagination])

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPagination({...pagination, page: 0})
        setQuery((e.target as any).search.value); //get input value
    }
    const onPaginate = (page: number) => setPagination({...pagination, page})
    const onPerPageChange = (perPage: number) => setPagination({page: 0, perPage})

    return (
        <>
            <SearchBar onSubmit={onSubmit}/>
            <ReposGrid 
                onPaginate={onPaginate}
                onPerPageChange={onPerPageChange}
                perPage={pagination.perPage}
                page={pagination.page}
            />
        </>
    );
}

export default MainPage;
