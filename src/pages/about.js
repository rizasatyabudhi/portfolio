import React from "react";
import Navigation from "../components/navigation";

const about = () => (
  <main>
    <section className="section-book">
      <Navigation />
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
              <div className="u-margin-bottom-medium u-center-text ">
                <h2 className="heading-secondary">About Me</h2>
              </div>

              <p className="paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                autem enim vel, dolore repellat assumenda, esse animi veniam
                vero aperiam, itaque at culpa perferendis molestiae accusamus
                nisi voluptate possimus laboriosam?
              </p>
              <div className="form__group">
                <button className="btn btn--green">Next step &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default about;
