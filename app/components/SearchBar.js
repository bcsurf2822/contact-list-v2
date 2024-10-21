'use client'
import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './components.module.css'
import { useState } from 'react'

function SearchBar() {


  const [search, setSearch] = useState("")
  console.log("Search", search)


  return (
    <Form className={styles.form}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className={styles.formLabel}>Search Contact</Form.Label>
        <Form.Control className={styles.formControl} onChange={(e) => setSearch(e.target.value)} value={search} as="textarea" rows={1} />
      </Form.Group>
    </Form>
  );
}

export default SearchBar;