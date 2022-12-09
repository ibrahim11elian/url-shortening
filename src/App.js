import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import Home from "./components/home";
import URLForm from "./components/url_form";
import LinkList from "./components/link_list";

function App() {
  // link state
  const [newLink, setNewLink] = useState("");
  // links list state default value comes from local storage if not then its empty list
  const [linkList, setLinkList] = useState(
    JSON.parse(localStorage.getItem("linkList")) || []
  );

  // remove link from list, update the local storage
  const removeLink = (id) => {
    const newLinkList = linkList.filter((item) => item.id !== id);
    localStorage.setItem("linkList", JSON.stringify(newLinkList));
    setLinkList([...newLinkList]);
  };
  return (
    <div className="App">
      <Header />
      <Home />
      <section className="site-body">
        <URLForm
          newLink={newLink}
          setNewLink={setNewLink}
          linkList={linkList}
          setLinkList={setLinkList}
        />
        <LinkList
          linkList={linkList}
          setLinkList={setLinkList}
          removeLink={removeLink}
        />
      </section>
    </div>
  );
}

export default App;
