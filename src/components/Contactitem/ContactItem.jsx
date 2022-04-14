import PropTypes from 'prop-types';
import { ConlactItem, NameNumber, Button } from './ContactItem.styled';

export default function ContactListItem({ contactName, contactNumber, del }) {
  return (
    <ConlactItem>
      <NameNumber>{contactName} :</NameNumber>
      <NameNumber>{contactNumber}</NameNumber>
      <Button type="button" onClick={del}>
        Delete
      </Button>
    </ConlactItem>
  );
}

ContactListItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  del: PropTypes.func.isRequired,
};
