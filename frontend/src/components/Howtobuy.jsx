import { useState } from "react";
import "../styles/Howtobuy.css";
import CopyButton from "../components/CopyButton.jsx";

export default function Howtobuy() {
  const address = "0x1234abcd5678ef9012345678abcd9012efabcd34";

  return (
    <section className="how-to-buy">
      <h2 className="howtobuytitle">How to Buy $CODE</h2>
      <div className="howtobuypdiv">
        <p className="howtobuyp">
          Buying Code Coin is simple! Follow these steps to join the community:
        </p>
      </div>

      <ol className="howtobuylist">
        <li>
          Install a crypto wallet that supports Base Chain (MetaMask
          recommended).
        </li>
        <li>
          Switch your wallet network to <strong>Base Chain</strong>.
        </li>
        <li>
          Ensure you have Base Chain tokens (BNB or USDC) to swap for $CODE.
        </li>
        <li>
          <div className="contract-address">
            <span className="addressspan">{address}</span>
            <CopyButton textToCopy={address} size="lg" />
          </div>
        </li>
        <li>
          Visit a DEX to buy: click "Buy on DEX" below or paste the contract in
          the swap.
        </li>
      </ol>

      <div className="buyonswap">
        <a
          href={`https://app.uniswap.org/#/swap?outputCurrency=${address}`}
          target="_blank"
          rel="noopener noreferrer"
          className="buy-btn px-6 py-3 bg-sky-400 text-black font-bold rounded hover:bg-sky-300 transition"
        >
          Buy on Uniswap
        </a>

        <a
          href={`https://www.dextools.io/app/en/base/pair-explorer/${address}`}
          target="_blank"
          rel="noopener noreferrer"
          className="dex-btn px-6 py-3 bg-purple-600 text-white font-bold rounded hover:bg-purple-500 transition"
        >
          View on DexTools
        </a>
      </div>

      <p className="basechain">
        ⚠️ Make sure you are on the <strong>Base Chain</strong> network and
        using the correct contract address to avoid scams. Always double-check
        before swapping.
      </p>
    </section>
  );
}
