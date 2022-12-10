/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookSquare, faTwitter, faPinterest, faInstagram);

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo"></div>
        {listData.map((l) => {
          return <FooterList key={l.id} list={l} />;
        })}
        <ul className="social">
          <li>
            <a href="https://www.facebook.com/ibrahim11ahmed/">
              <FontAwesomeIcon icon={["fab", "facebook-square"]} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ibrahim11elian">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={["fab", "pinterest"]} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ibrahim11ahmed/">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

function FooterList({ list }) {
  return (
    <ul className="footer-list">
      <li className="list-header">
        <a href="#">{list.title}</a>
      </li>
      {list.links.map((l, i) => {
        return (
          <li key={i}>
            <a href="#">{l}</a>
          </li>
        );
      })}
    </ul>
  );
}

const listData = [
  {
    id: 1,
    title: "features",
    links: ["link shortening", "branded links", "analytics"],
  },
  {
    id: 2,
    title: "resources",
    links: ["blog", "developers", "support"],
  },
  {
    id: 3,
    title: "company",
    links: ["about", "our team", "careers", "contact"],
  },
];

export default Footer;
