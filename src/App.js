import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './Components/ContactForm/ContactForm';
import Layout from './Components/Layout/Layout';
import Filter from './Components/Filter/Filter';
import ContactList from './Components/ContactList/ContactList';


export default class App extends Component {

    static propTypes = {
    };

    static defaultProps = {};

    state = {
        contacts: [],
        filter: ''
    };

    addContact = (name, number) => {
       const contact = {
       id: uuidv4(),
       name,
       number
       };

    this.setState(prevState => {
    return {
    contacts: [...prevState.contacts, contact],
    };
    });
    };
    
    changeFilter = filter => {
        this.setState({ filter });
    };

    getVisibleContacts = () => {
        const { contacts, filter } = this.state;
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()),
        );
    };
  
    render() {
        const { contacts, filter } = this.state;
        const visibleContacts = this.getVisibleContacts();
            
        return ( 
            <Layout>
                <h1>Phonebook</h1>
                <ContactForm onAddContact={this.addContact} /> 
                {contacts.length > 0 && (
                <h2>Contacts</h2>
                )}
                 {contacts.length > 0 && (
                    <Filter
                        value={filter}
                        onChangeFilter={this.changeFilter} />
                )}
                {contacts.length > 0 && (
                    <ContactList
                        contacts={visibleContacts}/>
                )} 
            </Layout>
        );
    }
}