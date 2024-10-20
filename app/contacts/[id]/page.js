import React from "react";

export default function ContactInfo({ contact }) {
  return (
    <div>
      <tr key={contact.id}>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    </div>
  );
}
