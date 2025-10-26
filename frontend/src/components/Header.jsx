import "../styles/Header.css";
import Images from "../Images";
import Nav from "../components/Nav.jsx";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <section className="myheader">
      <header>
        <h1 className="header">CodeCoin</h1>
        <img className="nobgpfp" src={Images["no-bg-pfp"]} alt="logo" />
      </header>
      <button className="menu" onClick={toggleMenu}>
        {open ? (
          <i className="fa-solid fa-xmark menu-icon"></i>
        ) : (
          <i className="fa-solid fa-bars menu-icon"></i>
        )}
      </button>
      <Nav open={open} />
    </section>
  );
}
