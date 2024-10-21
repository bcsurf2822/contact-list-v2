'use client'

import React, { createContext, useState, useEffect } from 'react';
import { fetchContacts } from '../utilities/axiosFunctions';
import { formatNumber, generateId } from '../utilities/generalFunctions';

const ContactsContext = createContext();

export const ContactsProvider =({ children }) => {

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetchContacts()
    .then((data) => {
      const formatContacts = data.map((contact) => ({
        ...contact,
        phone_number: formatNumber(contact.phone_number),
      }));
      setContacts(formatContacts);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

  const addNewContact = (newContact) => {
    setContacts([...contacts, {...newContact, id: generateId()}])
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
  }

  const getContact = (id) => {
    return contacts.find((contact) => contact.id === id);
  };

  return (
    <ContactsContext.Provider value={{contacts, addNewContact, getContact, deleteContact}}>
      {children}
    </ContactsContext.Provider>
  )
}

export const useContacts = () => React.useContext(ContactsContext);