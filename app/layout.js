import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap-icons/font/bootstrap-icons.css"; 
import "./globals.css"; 

import { Oxanium } from "next/font/google";

import { ContactsProvider } from "./contexts/ContactsProvider";
import { Container } from "react-bootstrap";
import Link from "next/link";

const oxanium = Oxanium({
  weight: "800",
  style: ["normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Container fluid className="header">
          <h1 className={oxanium.className}>Contacts List v2</h1>
          <Link href={"/"}>
            <i className="bi bi-houses-fill"></i>
          </Link>
        </Container>
        <ContactsProvider>{children}</ContactsProvider>
      </body>
    </html>
  );
}
