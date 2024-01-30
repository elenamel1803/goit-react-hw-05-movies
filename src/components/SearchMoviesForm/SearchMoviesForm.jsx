import { useState } from 'react';
import { infoEmptyMessage } from 'services/Notiflix';
import { Button, Form, InputText } from './SearchMoviesForm.styled';

const SearchMoviesForm = ({ setSearchParams }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = ({ target }) => {
    setSearchValue(target.value.toLowerCase().split(' ').join(' '));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!searchValue) {
      return infoEmptyMessage();
    }
    setSearchParams({ query: searchValue.trim() });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputText
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={searchValue}
        onChange={handleChange}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};
export default SearchMoviesForm;
