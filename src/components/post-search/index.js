import { Autocomplete } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { navigate } from 'gatsby';
import { TextField } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import { Box } from '@mui/system';
import './style.scss';

function PostSearch({ posts }) {
  const [searchState, setSearchState] = useState({
    query: '',
    results: posts,
  });

  return (
    <Autocomplete
      freeSolo
      disableClearable
      options={searchState.results}
      onInputChange={(event, value, reason) => {
        if (reason === 'reset' && value) {
          const item = searchState.results.find((item) => item.title === value);
          if (!item) return;
          navigate(item.slug);
        }
      }}
      filterOptions={(options, { inputValue }) =>
        options.filter(
          ({ title, categories }) => title.includes(inputValue) || categories.includes(inputValue),
        )
      }
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <Box sx={{ display: 'flex', alignItems: 'flex-end', width: 120 }}>
          <SearchOutlined sx={{ color: 'action.active', marginRight: 5, mr: 1, my: 0.5 }} />
          <TextField className="search-input" {...params} size="medium" />
        </Box>
      )}
    />
  );
}
export default PostSearch;
