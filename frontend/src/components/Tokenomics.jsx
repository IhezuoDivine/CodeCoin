import { useState } from "react";
import "../styles/Tokenomics.css";
import CopyButton from "../components/CopyButton.jsx";
import Images from "../Images";

export default function Tokenomics() {
  const address = "0x1234abcd5678ef9012345678abcd9012efabcd34";

  return (
    <section className="coin-info">
      <div className="coin-card ">
        <img className="nobgpfp" src={Images["no-bg-pfp"]} alt="logo" />
        <h1 className="coin-name">
          Code Coin <span className=".coin-symbol">($CODE)</span>
        </h1>
        <p className=" ">
          Network: <strong>Base Chain</strong>
        </p>

        <div className="contract-box ">
          <p className="contract-label">Contract Address:</p>
          <div className="contract-address">
            <span className="addressspan">{address}</span>
            <CopyButton textToCopy={address} size="lg" />
          </div>
        </div>
        <p className="tokenomics-btn ">
          Total Supply: <strong>1,000,000,000,000 CODE</strong>
        </p>
      </div>
    </section>
  );
}
