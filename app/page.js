"use client";

import Head from "next/head";
import styles from "./page.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Contacts from "./contacts/page";
import SearchBar from "./components/SearchBar";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("/contacts.json")
      .then((response) => {
        console.log("AXIO", response.data.contacts);
        setContacts(response.data.contacts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(contacts);

  return (
    <>
      <Container as="header" className="py-4 px-3 mx-auto">
        <h1>Contacts List v2</h1>
        <hr className="col-1 my-5 mx-0" />
      </Container>
      <Container className="search-bar">
        <SearchBar />
      </Container>
      <Container as="content" className={styles.tableContainer}>
        <Contacts contacts={contacts} />
      </Container>
    </>
  );
}
