import React, { Component } from "react";
import Link from "gatsby-link";
import axios from "axios";

const IndexPage = () => (
  <div>
    <h1 className="jumbotron">Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great</p>
    <Link to="/stack">Go to page 2</Link>
    <button className="btn btn-primary w-100 mt-2">button</button>
    <button className="btn btn-warning w-100 mt-2">button</button>
    <button className="btn btn-success w-100 mt-2">button</button>
  </div>
);

export default IndexPage;
