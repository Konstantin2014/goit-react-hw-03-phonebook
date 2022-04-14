import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import {
  TitleContactFotm,
  TitleContact,
} from './ContactForm/ContactForm.styled';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const parseContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newName => {
    const searchName = this.state.contacts
      .map(con => con.name)
      .includes(newName.name);

    if (searchName) {
      alert(`${newName.name} is already in contacts`);
    } else {
      const contact = {
        ...newName,
        id: nanoid(),
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  contactDelete = deleteId => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(({ id }) => id !== deleteId),
      };
    });
  };

  getFilteredContacts() {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  }

  onFilterHandleChange = filter => {
    this.setState({ filter });
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.getFilteredContacts();
    return (
      <div>
        <TitleContactFotm>Phonebook</TitleContactFotm>
        <ContactForm addContact={this.addContact} />

        <TitleContact>Contacts</TitleContact>
        <Filter
          filter={filter}
          onFilterHandleChange={this.onFilterHandleChange}
        />
        <ContactList
          contact={visibleContact}
          onContactDelete={this.contactDelete}
        />
      </div>
    );
  }
}
