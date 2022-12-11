import PropTypes from 'prop-types';
import {
  ContItem,
  DeleteContactButton,
  Descr,
  ListItem,
} from './ContactElem.styled';

export const ContactElem = ({ id, name, number, onDelete }) => {
  return (
    <ListItem key={id}>
      <ContItem>
        <Descr>{name}:</Descr>
        <Descr>{number}</Descr>
      </ContItem>
      <DeleteContactButton onClick={() => onDelete(id)} type="button">
        Delete
      </DeleteContactButton>
    </ListItem>
  );
};

ContactElem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
