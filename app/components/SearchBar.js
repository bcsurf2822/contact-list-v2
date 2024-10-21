'use client'
import React from 'react'
import { Container, Form } from 'react-bootstrap'
import styles from './components.module.css'
import { useState } from 'react'
import PropTypes from 'prop-types'

export default function SearchBar({setSearch}) {


const handleSearch = (e) => {
  setSearch(e.target.value)
}

  return (
   <Container className={styles.searchContainer}>
        <Form className={styles.form}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className={styles.formLabel}>Search Contact</Form.Label>
        <Form.Control className={styles.formControl} onChange={handleSearch} as="textarea" rows={1} />
      </Form.Group>
    </Form>
   </Container>
  );
}

SearchBar.propTypes = {
  setSearch: PropTypes.func.isRequired,
}

