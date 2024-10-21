import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./globals.css";

import { ContactsProvider } from "./contexts/ContactsProvider";
import { Container } from "react-bootstrap";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Container as="header" className="title py-4 px-3 mx-auto">
        <h1>Contacts List v2</h1>
        <Link href={"/"}>
            <i className="bi bi-house"></i>
        </Link>
    
        <hr className="col-1 my-5 mx-0" />
      </Container>
        <ContactsProvider>{children}</ContactsProvider>
      </body>
    </html>
  );
}
