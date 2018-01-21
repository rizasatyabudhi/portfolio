import React from "react";
import Navigation from "../components/navigation";
import me from "../images/me.jpg";

const about = () => (
  <main>
    <section className="section-book">
      <Navigation />
      <div className="row">
        <div className="book animate">
          <div className="book__form">
            <form action="#" className="form">
              <img
                className=""
                src={me}
                alt=""
                style={{
                  width: "256px",
                  borderRadius: "50%",
                  margin: "30px auto",
                  display: "block"
                }}
              />
              <div className="u-margin-bottom-medium u-center-text ">
                <h2 className="heading-secondary">About Me</h2>
              </div>
              <div className="u-center-text">
                <p className="paragraph">
                  A computer science student who passionate in the web
                  development. I started my learning journey in web development
                  from front-end development. Started from the most basic
                  front-end aspects, until utilizing the most popular front-end
                  framework named React JS, which is used by big companies like
                  Facebook,Instagram,Traveloka,Tokopedia, and many more. I then
                  continue to learn GraphQL, a query language for API, which
                  maybe replacing REST API in the future. My learning journey in
                  web development doesn’t stop there, I then continue to learn
                  back-end as well, which is the node JS with express & mongoDB
                  to create a web server API. I learn both front-end and
                  back-end because I am really thrilled to be able to make my
                  own application.
                </p>

                <p className="paragraph">
                  I have committed myself to never stop learning, because I
                  believe that web development is always advancing, if I stop
                  learning, that means I will be left behind with the current
                  web technologies.
                </p>
              </div>
              {/*
                <div className="form__group">
                <button className="btn btn--green">Next step &rarr;</button>
                </div>
            */}
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default about;
