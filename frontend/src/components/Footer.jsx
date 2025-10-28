import "../styles/Footer.css";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section
      className="footersection
    "
    >
      <div className="containerfooter">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-x-twitter"></i>
        </a>

        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-telegram"></i>
        </a>

        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>

        <a href="">
          <i className="fab fa-discord"></i>
        </a>
      </div>
      <p>&copy; {currentYear} CodeCoin All right reserved.</p>
    </section>
  );
}
