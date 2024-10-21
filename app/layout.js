import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

import { ContactsProvider } from "./contexts/ContactsProvider";
import { Container } from "react-bootstrap";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Container as="header" className="py-4 px-3 mx-auto">
        <h1>Contacts List v2</h1>
        <hr className="col-1 my-5 mx-0" />
      </Container>
        <ContactsProvider>{children}</ContactsProvider>
      </body>
    </html>
  );
}
