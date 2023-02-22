import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { useHistory } from 'react-router-dom';
import Button from '../../blocks/Button'
import useStateChange from '../../hooks/useStateChange';

const SearchBar = ({options}) => {
  const history = useHistory();
  const [query, setQuery, queryChange] = useStateChange('');


  options ||= {
    fill: 'black',
    size:'10x',
    fontSize: '20px'
  };

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/search/${query}`);
    setQuery('');
  }

  return (
    <div className='search-wrapper' onSubmit={handleSubmit}>
      <form id="search">
            <input type='text' id='searchText'
              className='search-text'
              placeholder='Search Clairvoyant'
              value={query}
              onChange={queryChange}
            />

            <Button type='submit'
              className='icon-btn search'
              containername='icon-btn-wrapper search'
            >
              <BsSearch className='icon-search' style={options}/>
            </Button>
          </form>
        </div>
  )
}

export default SearchBar