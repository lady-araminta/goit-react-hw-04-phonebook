import PropTypes from 'prop-types';
import { Field, Input, Label } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Field>
      <Label>Fined contacts by name</Label>
      <Input
        onChange={onChange}
        value={value}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </Field>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
