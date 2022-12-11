import { ContactElem } from 'components/ContactElem/ContactElem';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactElem
          key={id}
          name={name}
          id={id}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

ContactList.PropTypespropTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
