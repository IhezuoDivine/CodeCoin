// components/CopyButton.jsx
import { useState } from "react";

export default function CopyButton({ textToCopy, size = "1x" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // short feedback
    } catch (err) {
      console.error("Copy failed", err);
      // optional: show an error UI
    }
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy to clipboard"
      title={copied ? "Copied!" : "Copy"}
      className="copy-btn"
      type="button"
    >
      <i className={`fa-solid fa-copy fa-${size}`} aria-hidden="true" />
      <span className={`copy-feedback ${copied ? "visible" : ""}`}>
        {copied ? "Copied" : ""}
      </span>
    </button>
  );
}
