import PropTypes from 'prop-types';
import { ContactItem, NameNumber, Button } from './ContactItem.styled';

export default function ContactListItem({ contactName, contactNumber, del }) {
  return (
    <ContactItem>
      <NameNumber>{contactName} :</NameNumber>
      <NameNumber>{contactNumber}</NameNumber>
      <Button type="button" onClick={del}>
        Delete
      </Button>
    </ContactItem>
  );
}

ContactListItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  del: PropTypes.func.isRequired,
};
