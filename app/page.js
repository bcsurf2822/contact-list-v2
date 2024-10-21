"use client";

import Head from "next/head";
import styles from "./page.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Contacts from "./contacts/page";
import SearchBar from "./components/SearchBar";


import AddContactBtn from "./components/AddContactBtn";

import { useContacts } from "./contexts/ContactsProvider";

export default function Home() {
  const { contacts } = useContacts();

  return (
    <>
      <Container className={styles.searchBar}>
    
        <SearchBar />
        <AddContactBtn />
      </Container>
      <Container as="content" className={styles.tableContainer}>
        <Contacts contacts={contacts} />
      </Container>
    </>
  );
}
