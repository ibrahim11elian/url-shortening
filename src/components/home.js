/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Home() {
  return (
    <section id="home" className="container">
      <div className="content">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <a className="btn" href="#">
          get started
        </a>
      </div>
      <div className="section-image">
        <img src="./images/illustration-working.svg" alt="" />
      </div>
    </section>
  );
}

export default Home;
