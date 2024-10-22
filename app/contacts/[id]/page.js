"use client";
import React from "react";
import { useContacts } from "@/app/contexts/ContactsProvider";
import { useParams } from "next/navigation";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "../../page.module.css";
import { Oxanium } from "next/font/google";
import classNames from "classnames";

const oxanium = Oxanium({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function ContactInfo() {
  const { id } = useParams();
  const { getContact } = useContacts();

  const contact = id ? getContact(Number(id)) : null;

  if (!contact) {
    return <p>Contact Loading</p>;
  }

  return (
    <div className={styles.cardContainer}>
      <Card
        className={classNames(styles.infoCard, oxanium.className)}
        style={{ width: "17rem" }}
      >
        <Card.Img
          variant="top"
          className={styles.cardImage}
          src={contact.image_url}
          alt={`${contact.name} Image`}
        />
        <Card.Body>
          <Card.Title className={styles.infoTitle}>{contact.name}</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className={styles.contactInfo}>
            {contact.email}
          </ListGroup.Item>
          <ListGroup.Item className={styles.contactInfo}>
            {contact.phone_number}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}
