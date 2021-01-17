import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddContactForm from './Components/AddContactForm/AddContactForm';
import Layout from './Components/Layout/Layout';
import ContactList from './Components/ContactList/ContactList';

export default class App extends Component {

    static propTypes = {
    };

    static defaultProps = {};

    state = {
        contacts: [],
        name: '',
        number: ''
    };

addContact = text => {
    const contact = {
    id: uuidv4(),
    text,
    };

    this.setState(prevState => {
    return {
    contacts: [...prevState.contacts, contact],
      };
    });
};
  
    render() {
        const { contacts } = this.state;
        return ( 
            <Layout>
                <AddContactForm onAddContact={this.addContact} title="Phonebook"/> 
                {contacts.length > 0 && (
                    <ContactList contacts={contacts} title="Contacts" />)} 
          </Layout>
        );
    }
}