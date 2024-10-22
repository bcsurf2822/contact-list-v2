import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./globals.css";

import {DynaPuff} from 'next/font/google'

import { ContactsProvider } from "./contexts/ContactsProvider";
import { Container } from "react-bootstrap";
import Link from "next/link";

const dynaPuff = DynaPuff({weight: "600",   subsets: ['latin']})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Container fluid  className="header">
        <h1 className={dynaPuff.className}>Contacts List v2</h1>
        <Link href={"/"}>
            <i className="bi bi-house"></i>
        </Link>
      </Container>
        <ContactsProvider>{children}</ContactsProvider>
      </body>
    </html>
  );
}
