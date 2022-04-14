import { ConlactList } from './ContactList.styled.js';
import PropTypes from 'prop-types';
import ContactListItem from '../Contactitem/ContactItem';

export const ContactList = ({ contact, onContactDelete }) => (
  <ConlactList>
    {contact.map(({ name, number, id }) => (
      <ContactListItem
        key={id}
        contactName={name}
        contactNumber={number}
        del={() => onContactDelete(id)}
      />
    ))}
  </ConlactList>
);

ContactList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onContactDelete: PropTypes.func.isRequired,
};
