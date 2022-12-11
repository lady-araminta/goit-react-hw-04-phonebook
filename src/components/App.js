import { Container, GlobalStyle, Title } from './GlobalStyle';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

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

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    contacts.find(contact => contact.name === name)
      ? alert(name + ' is already in contacts.')
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  ChangeFilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  getFilterOnContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidMount() {
    const cont = localStorage.getItem('contacts');
    const parsedCont = JSON.parse(cont);
    if (parsedCont) {
      this.setState({ contacts: parsedCont });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.ChangeFilter} />
        <ContactList
          contacts={this.getFilterOnContact()}
          onDelete={this.deleteContact}
        />
        <GlobalStyle />
      </Container>
    );
  }
}
