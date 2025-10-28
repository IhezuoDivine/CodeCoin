import "../styles/Home.css";
import Header from "../components/Header.jsx";
import Nav from "../components/Nav.jsx";
import Images from "../Images";
import CopyButton from "../components/CopyButton.jsx";
import { useState, useEffect } from "react";
import Footer from "../components/Footer.jsx";
import Tokenomics from "../components/Tokenomics.jsx";
import Howtobuy from "../components/Howtobuy.jsx";

export default function Home() {
  const address = "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063...";
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_URL);
        const data = await res.json();
        setCoins(data);
      } catch (error) {
        console.error("Failed to fetch coins", error);
      }
    };
    fetchCoins();
  }, []);
  const filtered = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <section className="firstsection">
        <Header />
        <Nav />
        <h1 className="title">CodeCoin</h1>
        <p className="subtitle">
          CodeCoin Built by code. Fueled by memes. Owned by the people.
        </p>
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
      <section className="coincontainer">
        <input
          className="search"
          type="text"
          placeholder="Search coin"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />{" "}
        <div className="coinbox">
          {filtered.length > 0 ? (
            filtered.map((coin) => (
              <div key={coin.id} className="coincard">
                <img src={coin.image} alt={coin.name} width="50" />
                <h3>
                  {coin.name} ({coin.symbol.toUpperCase()})
                </h3>
                <p>Price: ${coin.current_price.toLocaleString()}</p>
                <p
                  style={{
                    color:
                      coin.price_change_percentage_24h >= 0 ? "green" : "red",
                  }}
                >
                  {coin.price_change_percentage_24h?.toFixed(2)}%
                </p>
              </div>
            ))
          ) : (
            <p className="noresults">No results found</p>
          )}
        </div>
      </section>
      <Tokenomics />
      <Howtobuy />
      <Footer />
    </main>
  );
}
