import React from "react";
import Link from "gatsby-link";

const IndexPage = () => (
  <div>
    <h1 className="jumbotron">Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great</p>
    <Link to="/page-2/">Go to page 2</Link>

    <button className="btn btn-primary w-100 mt-2">button</button>
    <button className="btn btn-warning w-100 mt-2">button</button>
    <button className="btn btn-success w-100 mt-2">button</button>
  </div>
);

export default IndexPage;
