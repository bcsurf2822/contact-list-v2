"use client";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import { useContacts } from "@/app/contexts/ContactsProvider";

export default function ContactInfo() {
  const {id} = useParams();
  const {getContact} = useContacts()

  const contact = getContact(Number(id))

  if (!contact) {
    return <p>Contact Loading</p>; 
  }


  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{contact.name}</Card.Title>
          <Card.Text>
    
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{contact.email}</ListGroup.Item>
          <ListGroup.Item>{contact.phone_number}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
