import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BtnSearch, InputSearch, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInput = e => {
    setQuery(e.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(query);
    setQuery('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <InputSearch
        onChange={handleInput}
        placeholder="Search..."
        name="search"
        required
        value={query}
        autoFocus
      />
    </SearchFormStyled>
  );
};
