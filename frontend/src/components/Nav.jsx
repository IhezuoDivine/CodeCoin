import "../styles/Nav.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";

export default function Nav({ open }) {
  if (!open) return null;
  return (
    <section className="Navcontainer">
      <ul className="navitems">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Aboutme">About</Link>
        </li>
        <li>
          <Link to="/Tokenomics">Tokenomics</Link>
        </li>
        <li>
          <Link to="/FAQ">FAQ</Link>
        </li>
        <li>
          <Link to="/BlogLists">Blog</Link>
        </li>
        <li>
          <Link to="/">Community</Link>
        </li>
        <li>
          <Link to="/">Partners</Link>
        </li>
        <li>
          <Link to="/Howtobuy">How to Buy</Link>
        </li>
      </ul>
      <Footer />
    </section>
  );
}
