import React, { Component } from 'react';
import './AddContactForm.css';

export default class AddContactForm extends Component {
    state = {
        nameText: '',
        numberText: ''
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
        const {nameText, numberText} = this.state;
        e.preventDefault();

           this.props.onAddContact(nameText, numberText);
           this.setState({
            nameText: '',
            numberText: ''
        });
    };
    
    render() {
        const { nameText, numberText } = this.state;

        return (
            <div>
                <form className="Form" onSubmit={this.handleSubmit} >
                    <label htmlFor="name" className="Label">Name</label>
                <input
                    type="text"
                    value={nameText}
                    id="name"
                    className="Input"
                        onChange={this.handleChange}
                        name="nameText"
                    />
            
                 <label htmlFor="number" className="Label">Number</label>
                <input
                    type="text"
                    value={numberText}
                    id="number"
                    className="Input"
                    onChange={this.handleChange}
                    name="numberText"
                    />
                    
                    <button type="submit">
                      Add contact
                    </button>
                 </form>
            </div>
        );
    }
}