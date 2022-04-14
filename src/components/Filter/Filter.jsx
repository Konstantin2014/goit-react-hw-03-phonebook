import { Label, Input } from '../Filter/Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ filter, onFilterHandleChange }) => {
  const onHandleChange = event => {
    onFilterHandleChange(event.currentTarget.value);
  };
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onHandleChange}
      />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterHandleChange: PropTypes.func.isRequired,
};
