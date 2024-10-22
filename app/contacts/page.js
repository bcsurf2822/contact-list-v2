"use client";

import React from "react";
import { Button, Table } from "react-bootstrap";
import PropTypes from "prop-types";

import styles from "../page.module.css";
import { useContacts } from "../contexts/ContactsProvider";
import { useRouter } from "next/navigation";

export default function Contacts({ filteredContact }) {
  const router = useRouter();

  const handleDoubleClick = (e) => {
    console.log("You click on :", e);
    router.push(`/contacts/${e}`);
  };

  const { deleteContact } = useContacts();

  return (
    <div className={styles.tableContainer}>
      <Table striped hover variant="dark" className={styles.table}>
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
          {filteredContact.map((contact) => (
            <tr
              onDoubleClick={() => handleDoubleClick(contact.id)}
              key={contact.id}
            >
              <td></td>
              <td>{contact.name}</td>
              <td className={styles.email}>{contact.email}</td>
              <td>{contact.phone_number}</td>

              <td className="function-btn">
                {" "}
                <Button
                  className={styles.deleteButton}
                  variant="danger"
                  onClick={() => deleteContact(contact.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

Contacts.propTypes = {
  filteredContact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone_number: PropTypes.string.isRequired,
      image_URL: PropTypes.string,
    })
  ).isRequired,
};
