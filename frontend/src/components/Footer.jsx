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
          href="https://x.com/dev_chikezie?s=21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-x-twitter"></i>
        </a>

        <a
          href="https://t.me/Chi_kezie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-telegram"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/ihezuo-divine-4517892b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
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
