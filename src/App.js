import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Title from './Components/Title/Title';
import AddContactForm from './Components/AddContactForm/AddContactForm';
import Layout from './Components/Layout/Layout';
import FindContact from './Components/FindContact/FindContact';
import ContactList from './Components/ContactList/ContactList';


export default class App extends Component {

    static propTypes = {
    };

    static defaultProps = {};

    state = {
        contacts: [],
        filter: '',
        name: '',
        number: ''
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
                <Title title="Phonebook" />
                <AddContactForm onAddContact={this.addContact} /> 
                {contacts.length > 0 && (
                <Title title="Contacts"/>
                )}
                 {contacts.length > 0 && (
                    <FindContact
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