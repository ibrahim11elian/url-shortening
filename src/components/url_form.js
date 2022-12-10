/* eslint-disable no-useless-escape */
import React from "react";

function URLForm({ newLink, setNewLink, linkList, setLinkList }) {
  // add the new link to the list then add the list to local storage
  const handleSubmit = async (e) => {
    e.preventDefault();

    // checking if the link have text or not
    if (newLink) {
      const urlRegex =
        /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
      if (newLink.match(urlRegex)) {
        document.querySelector(".submit-btn > span").style.display = "none";
        document.querySelector(".loading").style.display = "flex";
        let shortLink = "";
        await shortenURL(newLink)
          .then((res) => {
            shortLink = res.result.full_short_link;
          })
          .catch((e) => console.log(e));

        const link = {
          id: new Date().getTime().toString(),
          fullLink: newLink,
          shortenLink: shortLink,
        };
        document.querySelector(".submit-btn > span").style.display = "block";
        document.querySelector(".loading").style.display = "none";
        setLinkList((list) => {
          return [...list, link];
        });

        localStorage.setItem("linkList", JSON.stringify([...linkList, link]));
        setNewLink("");
      } else {
        document.querySelector(".url-input").style.cssText =
          "border: 4px solid #f46262";
        document.querySelector(".warning").textContent =
          "please type a valid URL";
        document.querySelector(".warning").style.cssText = "display: block";
      }
    } else {
      document.querySelector(".url-input").style.cssText =
        "border: 4px solid #f46262";
      document.querySelector(".warning").textContent = "please add a link";
      document.querySelector(".warning").style.cssText = "display: block";
    }
  };

  return (
    <form action="" className="url-form container" onSubmit={handleSubmit}>
      <input
        className="url-input"
        type="text"
        placeholder="Shorten a link here..."
        autoComplete="off"
        value={newLink}
        onChange={(e) => {
          setNewLink(e.target.value);
          document.querySelector(".url-input").style.cssText = "border: none";
          document.querySelector(".warning").style.cssText = "display: none";
        }}
      />
      <button className="submit-btn" type="submit">
        <span>shorten it!</span>
        <div className="loading centering">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div className="warning"></div>
    </form>
  );
}

const shortenURL = async (url) => {
  const baseURL = "https://api.shrtco.de/v2/shorten?url=";
  const res = await fetch(baseURL + url);
  return res.json();
};

export default URLForm;
