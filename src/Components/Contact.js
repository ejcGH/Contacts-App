import React from "react";
import PropTypes from "prop-types";

const Contact = ({contact, deleteContact}) => {
    return (
        <div className="contact">
            <div className="contact-left">
                <div className="contact-name">{contact.name}</div>
                <div className="contact-email">{contact.city}, {contact.state}</div>
            <div className="contact-right">
                {/* <div className="contact-price">{item.price}</div> */}
                <button className="contact-delete" onClick={ () => deleteContact(contact)}>Delete</button>
            </div>
             </div>
        </div>
    )
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteContact: PropTypes.object.isRequired

};

export default Contact;