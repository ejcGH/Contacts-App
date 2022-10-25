import React from "react";
import PropTypes from 'prop-types';
import Contact from "./Contact";
import './ContactList.css';

function ContactList({contacts}){



    return (
        <ul className="contactlist-contact">
            {contacts.map(contact => 
                <li key={contact.id} className="contactslist-contacts">
                   <Contact contact={contact}  />
                   
                </li>)}
        
        </ul>
    )
}

    ContactList.propTypes = {
        contacts: PropTypes.array.isRequired
}
            


export default ContactList;

//deleteContact={ () => deleteContact(contact)}

// return (
//     <ul className="contactlist-contact">
//         {contacts.map(contact => 
//             <li key={contact.id} className="contactslist-contacts">
//                <Contact contact={contact}  />
               
//             </li>)}
    
//     </ul>
// )
// }