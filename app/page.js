"use client";
import styles from "./page.module.css";
import { Container } from "react-bootstrap";
import Contacts from "./contacts/page";
import SearchBar from "./components/SearchBar";
import AddContactBtn from "./components/AddContactBtn";

import { Oxanium } from "next/font/google";

import { useContacts } from "./contexts/ContactsProvider";
import { useState } from "react";
import classNames from "classnames";

const oxanium = Oxanium({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Home() {
  const { contacts } = useContacts();

  const [search, setSearch] = useState("");
  console.log(search);

  const filteredContact = contacts.filter((contact) => {
    const [firstName, lastName] = contact.name.toLowerCase().split(" ");
    return (
      firstName.startsWith(search.toLowerCase()) ||
      (lastName && lastName.startsWith(search.toLowerCase()))
    );
  });

  return (
    <>
      <Container
        className={classNames(oxanium.className, styles.searchAddContainer)}
      >
        <SearchBar setSearch={setSearch} />
        <AddContactBtn />
      </Container>
      <Container
        as="content"
        className={classNames(oxanium.className, styles.tableContainer)}
      >
        <Contacts filteredContact={filteredContact} />
      </Container>
    </>
  );
}
