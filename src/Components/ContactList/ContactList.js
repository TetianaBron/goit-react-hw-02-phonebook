import './ContactList.css';


const ContactList = ({ contacts }) => (
    <div>
    <ul>
        {contacts.map(({ id, name, number }) => (
            <li
                key={id}>
                 {name}: {number}
            </li>
        ))}
    </ul>
    </div>
);

export default ContactList;