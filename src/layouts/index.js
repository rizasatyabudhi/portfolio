import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "../style/main.scss";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Riza Satyabudhi"
      meta={[
        { name: "description", content: "rizasatyabudhi" },
        { name: "keywords", content: "rizasatyabudhi, rizasatyabudhi" }
      ]}
    />

    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
