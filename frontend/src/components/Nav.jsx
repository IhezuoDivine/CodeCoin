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
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">FAQ</Link>
        </li>
        <li>
          <Link to="/">Community</Link>
        </li>
        <li>
          <Link to="/">Partners</Link>
        </li>
        <li>
          <Link to="/">How to Buy</Link>
        </li>
      </ul>
      <Footer />
    </section>
  );
}
