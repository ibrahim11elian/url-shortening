import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartColumn,
  faGaugeHigh,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

function Statistics() {
  return (
    <section className="stat container">
      <div className="content">
        <h1>advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="cards">
        {cardData.map((c) => {
          return <Card key={c.id} card={c} />;
        })}
      </div>
    </section>
  );
}

function Card({ card }) {
  return (
    <div className="card">
      <div className="icon">
        <FontAwesomeIcon icon={card.icon} />
      </div>
      <div className="title">{card.title}</div>
      <div className="details">{card.details}</div>
    </div>
  );
}

const cardData = [
  {
    id: 1,
    icon: faChartColumn,
    title: "Brand Recognition",
    details:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    id: 2,
    icon: faGaugeHigh,
    title: "Detailed Records",
    details:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    id: 3,
    icon: faPenToSquare,
    title: "Fully Customizable",
    details:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

export default Statistics;
