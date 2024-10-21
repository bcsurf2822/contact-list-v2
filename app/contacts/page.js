"use client";

import Link from "next/link";

import React from "react";
import { Button, Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { formatNumber } from "../utilities/generalFunctions";
import ContactInfo from "./[id]/page";

import styles from "./page.module.css";

export default function Contacts({ contacts }) {
  Contacts.PropTypes = {
    contacts: PropTypes.objectOf(PropTypes.array).isRequired,
  };

  return (
    <div className={styles.tableContainer}>
      <Table striped hover className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                {" "}
                <img
                  className={styles.userImage}
                  src={contact.imageURL}
                  alt=""
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone_number}</td>


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
