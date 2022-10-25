import React from "react";

const Nav = ( {activeTab, onTabChange} ) => {
    const contactClass = (tabName) => `
        App-nav-item ${(activeTab === tabName) ? 'selected' : ''}
    `

    return (
        <nav className="App-nav"> <ul>
        <li className={contactClass('Contacts')}> 
        <button onClick={ () => onTabChange('Contacts')}>Contacts</button>
        </li>
        <li className={contactClass('Add')}>
        <button onClick={ () => onTabChange('Add')}>Add New Contact</button> </li>
        </ul> </nav>
        )
}

export default Nav;

