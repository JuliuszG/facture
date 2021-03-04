import React from 'react';
import styled from 'styled-components';
import IconSearch from './IconSearch';

const SearchStyle = styled.div`
display: flex;
align-items: center
`
const InputStyle = styled.input`
height: 25px;
border-top: none;
border-left: none;
border-right: none;
font-family: Poppins;
font-size: 12px;

&:focus {
    outline-style: none;
}
`

const Search = () => {
    return (
        <SearchStyle>
          <IconSearch/>
          <form action="">
             <InputStyle type="text" placeholder= 'Search' /> 
          </form>
        </SearchStyle>
    )
}

export default Search;