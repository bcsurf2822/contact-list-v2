import React from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";

export default function AddContactBtn() {
  return (
    <div>
      <Link href='/contacts/new'>
        <Button variant="success">Add Contact</Button>
      </Link>
    </div>
  );
}
