import React from "react";
import './footer.css';


export default function Footer({ text }) {
  return (
    <footer className="footer">
      <p>{text}</p>
    </footer>
  );
}
