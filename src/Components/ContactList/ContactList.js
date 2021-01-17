import './ContactList.css';


const ContactList = ({ contacts, onRemoveContact }) => (
    <div>
    <ul>
            {contacts.map(({ id, name, number }) => (
            <li
                key={id}
                className="ContactItem">
                   - {name}: {number}
                <button
                    type="button"
                    onClick={() => onRemoveContact(id)}>
                     Delete
                 </button>
            </li>
        ))}
        </ul>
        
    </div>
);

export default ContactList;