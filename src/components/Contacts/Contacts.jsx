import React from "react";
import PropTypes from 'prop-types';


const Contacts = (props) => {
  console.log(props.deleteContact);
  return (
    <ul>
      { 
        props.contacts.map((item) => {
          console.log(item);
          return (
            <li key={item.id}>
              {item.name}: {item.number}
              <button className="list__btn" onClick={() => props.deleteContact(item.id)} type="button">
                Delete
              </button>
            </li>
          );
      })}
    </ul>
  );
};

Contacts.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired
}

export default Contacts;