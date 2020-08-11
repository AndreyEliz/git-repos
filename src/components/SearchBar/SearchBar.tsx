import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './styles';

interface SearchBarProps {
    onSubmit(e?: React.FormEvent<HTMLFormElement>): void
}

const SearchBar: React.FC<SearchBarProps> = ({onSubmit}) => {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.title} variant="h6" noWrap>
                    Git repos
                </Typography>
                <form className={classes.search} name="searchForm" onSubmit={onSubmit}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        autoComplete="off"
                        name='search'
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </form>
            </Toolbar>
        </AppBar>
    </div>
    );
}

export default SearchBar