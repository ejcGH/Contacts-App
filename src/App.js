import React, {useState, useCallback} from 'react';
import './App.css';
import Nav from './Components/Nav';
import {contacts} from './Components/static-contacts'
import ContactForm from './Components/ContactForm'
import ContactList from './Components/ContactList'


const App = () => {
  const [activeTab, setActiveTab] = useState('contacts')
  const [contactList, setContactList] = useState([]);
  // const deleteContact = (contact) => {
  //   const newContacts = list.filter( (_, i) => i !== contact)
  //   updateList(newContacts)
  // }

 
  return (
    <div className="App">
      <h1>Contacts APP</h1>
      <Nav activeTab={activeTab} onTabChange={setActiveTab}/>
      <main className="App-content">
    <Content tab={activeTab} contactList={contactList} setContactList={setContactList}/>
    </main>
      
    </div>
  );
}

const Content = ( {tab, contactList, setContactList} ) => {
  switch (tab) {
    case 'Contacts':
      return <ContactList contacts={contactList}  />
    case 'Add':
      return <ContactForm contactList={contactList} setContactList={setContactList} />
  } 
}

export default App;
