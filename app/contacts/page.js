"use client";

import Link from "next/link";

import React from "react";
import { Button, Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { formatNumber } from "../utilities/formatNumber";
import ContactInfo from "./[id]/page";

export default function Contacts({ contacts }) {
  Contacts.PropTypes = {
    contacts: PropTypes.objectOf(PropTypes.array).isRequired,
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{formatNumber(contact.phone_number)}</td>

              <td className="function-btn">
                {" "}
                <Button variant="warning">Edit</Button>{" "}
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
