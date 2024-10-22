"use client";

import React from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import classNames from "classnames";
import styles from "../../page.module.css";
import { useContacts } from "@/app/contexts/ContactsProvider";

import { Oxanium } from "next/font/google";

const oxanium = Oxanium({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function AddContact() {
  const { addNewContact } = useContacts();
  const router = useRouter();

  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
    imageURL: "",
  });

  const handleAddContact = (e) => {
    e.preventDefault();

    const defaultImageContact = {
      ...newContact,
      imageURL: newContact.imageURL || "/images/defaultAvatar.webp",
    };
    addNewContact(defaultImageContact);
    setNewContact({ name: "", email: "", phone: "", imageURL: "" });
    router.push("/");
  };

  return (
    <>
      <h2 className={classNames(oxanium.className, styles.addPageTitle)}>
        New Contact Information
      </h2>

      <Container className={classNames(styles.addContainer, oxanium.className)}>
        <Form onSubmit={handleAddContact}>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              value={newContact.name}
              onChange={(e) =>
                setNewContact({ ...newContact, name: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              value={newContact.email}
              onChange={(e) =>
                setNewContact({ ...newContact, email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              required
              type="text"
              value={newContact.phone_number}
              pattern="\d{11}"
              onChange={(e) =>
                setNewContact({ ...newContact, phone_number: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              value={newContact.imageURL}
              onChange={(e) =>
                setNewContact({ ...newContact, imageURL: e.target.value })
              }
            />
          </Form.Group>
          <Button type="submit" className={styles.submitBtn} variant="success">
            Add Contact
          </Button>
        </Form>
      </Container>
    </>
  );
}
