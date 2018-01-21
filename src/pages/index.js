import React from "react";
import Link from "gatsby-link";
import Navigation from "../components/navigation";
import image from "../images/tes.jpg";

const Index = () => (
  <main>
    <Navigation />
    <header className="header">
      <div className="header__logo-box" />
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Riza Satyabudhi</span>
          <span className="heading-primary--sub">Developer</span>
        </h1>
        <a href="#section-tours" className="btn btn--white btn--animated">
          Discover our tours
        </a>
      </div>
    </header>
    {/*
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nulla deserunt voluptatum nam.
          </p>

          <a href="#" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition" />
        </div>
      </div>
    </section>
    */}
  </main>
);

export default Index;
