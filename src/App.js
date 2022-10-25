import React, {useState, useCallback} from 'react';
import './App.css';
import Nav from './Components/Nav';
import {contacts} from './Components/static-contacts'
import ContactForm from './Components/ContactForm'
import ContactList from './Components/ContactList'

const App = () => {
  const [activeTab, setActiveTab] = useState('contacts')
  const [list, updateList] = useState([]);
  const deleteContact = (contact) => {
    const newContacts = list.filter( (_, i) => i !== contact)
    updateList(newContacts)
  }

 
  return (
    <div className="App">
      <h1>Contacts APP</h1>
      <Nav activeTab={activeTab} onTabChange={setActiveTab}/>
      <main className="App-content">
    <Content tab={activeTab}  deleteContact={deleteContact}/>
    </main>
      
    </div>
  );
}

const Content = ( {tab} ) => {
  switch (tab) {
    case 'Contacts':
      return <ContactList contacts={contacts}  />
    case 'Add':
      return <ContactForm/>
  } 
}

export default App;
