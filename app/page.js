"use client";

import Head from "next/head";
import styles from "./page.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Contacts from "./contacts/page";
import SearchBar from "./components/SearchBar";

import AddContactBtn from "./components/AddContactBtn";

import { useContacts } from "./contexts/ContactsProvider";
import { useState } from "react";

export default function Home() {
  const { contacts } = useContacts();

  const [search, setSearch] = useState("");
  console.log(search);

  const filteredContact = contacts.filter((contact) => {
    const [firstName, lastName] = contact.name.toLowerCase().split(' '); 
    return (
      firstName.startsWith(search.toLowerCase()) || 
      (lastName && lastName.startsWith(search.toLowerCase())) 
    );
  });

  
  return (
    <>
      <Container className={styles.searchAddContainer}>
        <SearchBar setSearch={setSearch} />
        <AddContactBtn />
      </Container>
      <Container as="content" className={styles.tableContainer}>
        <Contacts filteredContact={filteredContact} />
      </Container>
    </>
  );
}


