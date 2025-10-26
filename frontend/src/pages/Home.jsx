import "../styles/Home.css";
import Header from "../components/Header.jsx";
import Nav from "../components/Nav.jsx";
import Images from "../Images";
import CopyButton from "../components/CopyButton";

export default function Home() {
  const address = "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063...";
  return (
    <main>
      <section className="firstsection">
        <Header />
        <Nav />
        <h1 className="title">CodeCoin</h1>
        <p className="subtitle">CodeCoin where memes compile and devs degen.</p>
        <div className="homeimgecontainer">
          <img className="homeimg" src={Images["no-bg-pfp"]} alt="img" />
          <div className="homesociallinkcontain">
            <a href="" className="homesociallink">
              <i class="fa-brands fa-telegram"></i>
            </a>
            <a href="" className="homesociallink">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
        <div className="bottondiv">
          <button>Buy CodeCoin</button>
          <button>DEX Tools</button>
        </div>
        <aside className="addresscontain">
          <p>{address}</p>
          <CopyButton textToCopy={address} size="lg" />
        </aside>
      </section>
    </main>
  );
}
