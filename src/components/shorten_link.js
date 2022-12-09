import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function ShortenLink({ link, removeLink }) {
  return (
    <div className="shorten-div">
      <div className="full-link">
        {link.fullLink.length > 100
          ? `${link.fullLink.slice(0, 50)}...`
          : link.fullLink}
      </div>
      <div className="shorten-link">
        {link.shortenLink.length > 100
          ? `${link.shortenLink.slice(0, 50)}...`
          : link.shortenLink}
      </div>
      <button
        className="copy-btn"
        onClick={(e) => {
          copyToClipBoard();
          copied(e);
        }}
      >
        copy
      </button>
      <FontAwesomeIcon icon={faTimes} onClick={() => removeLink(link.id)} />
    </div>
  );
}

function copied(e) {
  const btn = e.target;
  btn.textContent = "copied!";
  btn.style.cssText = "background: hsl(260, 8%, 14%)";
  setTimeout(() => {
    btn.textContent = "copy";
    btn.style.cssText = "background: hsl(0, 0%, 75%)";
  }, 2000);
}

function copyToClipBoard() {
  // Get the text field
  var copyText = document.querySelector(".shorten-link");

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.textContent);
}

export default ShortenLink;
