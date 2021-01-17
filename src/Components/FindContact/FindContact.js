import './FindContact.css';

const FindContact = ({value, onChangeFilter}) => (
    <div className="FindForm">
        <label htmlFor="find"
            className="FindLabel">
            Find contact by name
            </label>
        <input
            type="text"
            value={value}
            id="find"
            className="FindInput"
            onChange={e => onChangeFilter(e.target.value)}
             />
</div>
)

export default FindContact;