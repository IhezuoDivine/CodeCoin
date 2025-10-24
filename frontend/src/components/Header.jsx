import "../styles/Header.css";
import Images from "../Images";

export default function Header() {
  return (
    <section>
      <header>
        <h1 className="header">CodeCoin</h1>
        <img
          className="nobgpfp"
          src={Images["no-bg-pfp"]}
          alt="logo"
        />
      </header>
    </section>
  );
}
