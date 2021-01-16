import './ContactList.css';

const ContactList = ({ contacts, title }) => (
    <div>
    <h2>{title}</h2>
    <ul>
        {contacts.map(({ id, text }) => (
            <li    key={id}>
                 {text}
            </li>
        ))}
    </ul>
    </div>
);

export default ContactList;