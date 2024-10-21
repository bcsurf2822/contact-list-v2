'use client'

import React, { createContext, useState, useEffect } from 'react';
import { fetchContacts } from '../utilities/axiosFunctions';
import { generateId } from '../utilities/generalFunctions';

const ContactsContext = createContext();

export const ContactsProvider =({ children }) => {

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetchContacts()
    .then((data) => {
      setContacts(data);
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  const addNewContact = (newContact) => {
    setContacts([...contacts, {...newContact, id: generateId()}])
  }

  return (
    <ContactsContext.Provider value={{contacts, addNewContact}}>
      {children}
    </ContactsContext.Provider>
  )
}

export const useContacts = () => React.useContext(ContactsContext);