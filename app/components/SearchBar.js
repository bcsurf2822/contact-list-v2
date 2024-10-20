'use client'
import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './components.module.css'

function SearchBar() {
  return (
    <Form className={styles.form}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Search Contact</Form.Label>
        <Form.Control as="textarea" rows={1} />
      </Form.Group>
    </Form>
  );
}

export default SearchBar;