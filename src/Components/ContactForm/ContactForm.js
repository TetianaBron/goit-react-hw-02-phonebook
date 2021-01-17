import React, { Component } from 'react';
import './ContactForm.css';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    static propTypes = {
    };

    static defaultProps = {};

    handleChange = e => {
        const { name, value } = e.target;
            this.setState({
                [name]: value,
            });
    };

    handleSubmit = e => {
        const { name, number } = this.state;
        e.preventDefault();
            this.props.onAddContact(name, number);
            this.setState({
                name: '',
                number: ''
            });
    };
    
    render() {
        const { name, number } = this.state;

        return (
            <div>
                <form className="Form" onSubmit={this.handleSubmit} >
                    <label htmlFor="name" className="Label">Name</label>
                <input
                    type="text"
                    value={name}
                    id="name"
                    className="Input"
                    onChange={this.handleChange}
                    name="name"
                    />
            
                 <label htmlFor="number" className="Label">Number</label>
                <input
                    type="text"
                    value={number}
                    id="number"
                    className="Input"
                    onChange={this.handleChange}
                    name="number"
                    />
                    
                    <button type="submit">
                      Add contact
                    </button>
                 </form>
            </div>
        );
    }
}