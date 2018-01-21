import React from "react";
import Link from "gatsby-link";
import Navigation from "../components/navigation";

import cert1 from "../images/cert1.jpg";
import cert2 from "../images/cert2.jpg";
import cert3 from "../images/cert3.jpg";

const courses = () => (
  <main>
    <Navigation />
    <section className="section-about animate">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Courses I Have Taken</h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            1. Modern React with Redux
          </h3>
          <p className="paragraph">
            What i learned from the course:
            <ul>
              <li>
                Understand the process of breaking down a complex component into
                many smaller, interchangeable components
              </li>
              <li>
                Grasp the difference between “props" and “state" and when to use
                each
              </li>
              <li>
                Develop complex applications that scale in complexity by
                understanding Redux
              </li>
              <li>
                Develop Redux app with Redux Thunk (middleware) & Redux Form
              </li>
            </ul>
          </p>
          <a
            href="https://www.udemy.com/certificate/UC-E63Z23PD/"
            className="btn-text"
            target="_blank"
          >
            Link to course &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <img
            className="composition__photo"
            style={{ width: "400px" }}
            src={cert1}
            alt=""
          />
        </div>
      </div>
      <div className="row stack">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            2. GraphQL with React : The Complete Developer Guide
          </h3>
          <p className="paragraph">
            What i learned from the course:
            <ul>
              <li>
                Understand the fundamentals of GraphQL, including data types,
                schemas, and integration with Express and React
              </li>
              <li>
                How to use GraphQL's schema to define relations between data
                objects
              </li>
              <li>
                Understand the process of combining a backend server with a
                front end React
              </li>
              <li>
                Understand the process of thinking about applications data in
                terms of a graph structure
              </li>
              <li>
                Grasp the difference between GraphQL, Apollo, and Relay, and
                when to use each
              </li>
              <li>Authentication with GraphQL</li>
              <li>
                The core principles of navigation with React Router and GraphQL
              </li>
              <li>
                Build servers that can be used with both React and React Native
                applications
              </li>
            </ul>
          </p>
          <a
            href="https://www.udemy.com/certificate/UC-O6QNCV7M/"
            className="btn-text"
            target="_blank"
          >
            Link to course &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <img
            className="composition__photo"
            style={{ width: "400px" }}
            src={cert2}
            alt=""
          />
        </div>
      </div>
      <div className="row stack">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            3. The Complete Developers Guide to MongoDB
          </h3>
          <p className="paragraph">
            What i learned from the course:
            <ul>
              <li>
                Understand the fundamentals of Mongo, including collections,
                validations, and common record manipulation techniques
              </li>
              <li>
                Learn how to use MongooseJS library to interface with MongoDB
              </li>
              <li>
                Write tests around Mongo queries to ensure the code is working
                with Mocha ( Test Driven Development )
              </li>
              <li>Understand the process of designing NoSQL schema</li>
              <li>
                Grasp the differences record associations and resource embedding
              </li>
              <li>
                {" "}
                Use the advanced features of Mongoose to save development time
              </li>
              <li>
                Understand the integration of Mongo, Node, and Mocha in a modern
                development environment
              </li>
            </ul>
          </p>
          <a
            href="https://www.udemy.com/certificate/UC-YK5216ET/"
            className="btn-text"
            target="_blank"
          >
            Link to Course &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <img
            className="composition__photo"
            style={{ width: "400px" }}
            src={cert3}
            alt=""
          />
        </div>
      </div>
      <div className="row stack">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            4. Wes Bos' Learn Node Course
          </h3>
          <p className="paragraph">
            What i learned from the course:
            <div className="row stack">
              <div className="col-1-of-2">
                <ul>
                  <li>User Accounts</li>
                  <li>Database Schemas (NoSQL)</li>
                  <li>Middleware</li>
                  <li>Password Reset Flow</li>
                  <li>Routing</li>
                  <li>Error Handling</li>
                  <li>File Uploading</li>
                  <li>MVC Pattern</li>
                </ul>
              </div>
              <div className="col-1-of-2">
                <ul>
                  <li>REST API endpoints</li>
                  <li>Document Relationships</li>
                  <li>Restricting Operations</li>
                  <li>Image Resizing</li>
                  <li>Storing Geospatial Data</li>
                  <li>Flow Control</li>
                  <li>Advanced DB Queries</li>
                  <li>Sending Email</li>
                </ul>
              </div>
            </div>
          </p>
          <a href="https://learnnode.com/" className="btn-text" target="_blank">
            Link to course &rarr;
          </a>
        </div>
      </div>
      <div className="row stack">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            5. Other Courses I'm Currently Taking
          </h3>
          <p className="paragraph">
            <ol>
              <li>Ethereum and Solidity: The Complete Developer's Guide</li>
              <li>Progressive Web App (PWA) - The Complete Guide</li>
              <li>Node with React: Fullstack Web Development</li>
              <li>Understand the process of designing NoSQL schema</li>
            </ol>
          </p>
          <a
            href="https://www.udemy.com/user/947067e1-b5f1-45de-937d-82f7f0b96b05/"
            className="btn-text"
            target="_blank"
          >
            Link to course &rarr;
          </a>
        </div>
      </div>
    </section>
  </main>
);

export default courses;
