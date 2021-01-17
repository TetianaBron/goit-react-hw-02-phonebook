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
        console.log(name);
        console.log(value);

        this.setState({
        [name]: value,
        });
    };

    //   handleChange = e => {
    // const { name, value } = e.target;

    // this.setState({
    //   [name]: value,
    // });
    // };
    


    //   handleChangeNumber = e => {
    //     this.setState({
    //         numberText: e.target.value,
    //     });
    // };

    handleSubmit = e => {
        e.preventDefault();

           this.props.onAddContact(this.state);
           this.setState({
            nameText: '',
            numberText: ''
        });
    };
    
    render() {
        const { title } = this.props;
        const { nameText, numberText } = this.state;

        return (
            <div>
             <h2>{title}</h2>
       
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