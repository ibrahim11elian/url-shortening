import React from "react";
import ShortenLink from "./shorten_link";

function LinkList({ linkList, removeLink }) {
  return (
    <div className="link-list container">
      {linkList
        .slice(0)
        .reverse()
        .map((item) => {
          return (
            <ShortenLink key={item.id} link={item} removeLink={removeLink} />
          );
        })}
    </div>
  );
}

export default LinkList;
