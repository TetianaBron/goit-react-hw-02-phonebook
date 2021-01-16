import React, { Component } from 'react';
import './AddContactForm.css';

export default class AddContactForm extends Component {
    state = {
        text: '',
    };

    static propTypes = {
    };

    static defaultProps = {};

    handleChange = e => {
        this.setState({
            text: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onAddContact(this.state.text);
    };
    
    render() {
        const { title } = this.props;

        return ( <div>
             <h2>{title}</h2>
       
                <form className="Form" onSubmit={this.handleSubmit} >
                    <label htmlFor="name" className="Label">Name</label>
                <input
                    type="text"
                    value={this.state.text}
                    id="name"
                    className="Input"
                    onChange={this.handleChange} />
            
                
                    <button type="submit">
                      Add contact
                    </button>
            </form>
             </div>
        );
    }
}