import React from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";
import styles from '../page.module.css'

export default function AddContactBtn() {
  return (
    <div>
      <Link href='/contacts/new'>
        <Button className={styles.className}variant="success">Add Contact</Button>
      </Link>
    </div>
  );
}
