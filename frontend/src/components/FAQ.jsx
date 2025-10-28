import React, { useState } from "react";
import "../styles/FAQ.css";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Code Coin?",
      answer:
        "Code Coin is a meme-inspired cryptocurrency built for fun, community, and innovation — a project made by the people, for the people.",
    },
    {
      question: "How can I buy Code Coin?",
      answer:
        "You can buy Code Coin by connecting your wallet (like MetaMask) to a DEX such as Uniswap or DexTools, and swapping Base tokens for $CODE using our contract address.",
    },
    {
      question: "What chain is Code Coin on?",
      answer:
        "Code Coin runs on the Base Chain — a fast, low-fee blockchain ideal for community-driven tokens.",
    },
    {
      question: "Is there a tax on transactions?",
      answer:
        "No developer taxes. 100% for the people. Every transaction helps strengthen the community and liquidity.",
    },
    {
      question: "What’s the vision of Code Coin?",
      answer:
        "Our mission is to bring laughter, transparency, and culture to crypto — while building a movement that rewards community engagement.",
    },
  ];

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className="faq-answer"
              style={{
                maxHeight: activeIndex === index ? "200px" : "0px",
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
