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
                  I am a computer science student who passionate in the web
                  development. I started my learning journey in web development
                  from front-end development. Started from the most basic
                  front-end aspects, until utilizing the most popular front-end
                  framework named React JS, which is used by big companies like
                  Facebook,Instagram,Traveloka,Tokopedia, and many more. I then
                  continue to learn GraphQL, a query language for API, which may
                  be replacing REST API in the future. My learning journey in
                  web development doesn’t stop there, I then continue to learn
                  back-end as well, which is with node JS with express & mongoDB
                  to create a web server API. I learn both front-end and
                  back-end because I am really thrilled to be able to make my
                  own application.
                </p>

                <p className="paragraph">
                  I have committed myself to never stop learning, because I
                  believe that web development is always advancing. If I stop
                  learning, that means I will be left behind with the
                  awesomeness of web technologies advancement.
                </p>
              </div>

              <div className="u-center-text u-margin-top-big ">
                <div className="row">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Education
                  </h3>
                  <p className="paragraph">
                    <strong> Computer Science Undergraduate</strong>
                    <br />Universitas Gadjah Mada
                    <br /> 2015 - Present
                  </p>
                </div>
              </div>
              <div className="u-center-text u-margin-top-big ">
                <div className="row">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Experience
                  </h3>
                  <p className="paragraph">
                    <strong>
                      1. INTERNAL & EXTERNAL OF HIMPUNAN MAHASISWA ILMU KOMPUTER
                      UGM
                    </strong>
                    <br /> Oct 2015 – Sept 2016
                    <br /> I learned many soft skills after I joined this
                    division of Himpunan Mahasiswa Ilmu Komputer UGM, such as
                    time management skill, communication skill, organizational
                    skill, many more.
                  </p>
                  <p className="paragraph">
                    <strong>
                      2. INFORMATION SYSTEM DIVISION OF ORGANISASI MAHASISWA
                      AHLI TEKNOLOGI INFORMASI
                    </strong>
                    <br /> Sept 2016 – Sept 2017
                    <br /> My passion in web development started when I join the
                    information system division of this organization. I learned
                    many basic web development skill here, as we conducted
                    tutorial session three times a week.
                  </p>
                  <p className="paragraph">
                    <strong>3. DATTABOT WEB DEVELOER INTERNSHIP</strong>
                    <br /> Sept 2017 – Dec 2017
                    <br /> I was the front-end web developer for Dattabot, which
                    responsible for creating web application prototype using
                    Next JS, a server-side rendering framework for React JS. The
                    prototype also use GraphQL for the backend, which requires
                    me to connect the GraphQL backend server with the front- end
                    using Apollo library. I learned many new cutting edge
                    technologies such as NextJS and GraphQL from this project.
                  </p>
                  <p className="paragraph">
                    <strong>4. JOGJA INFORMATION TECHNOLOGY SESSION WEB DEVELOPER</strong>
                    <br /> Dec 2017 – Jan 2018
                    <br /> I was in charged of making the website for Himakom’s (Himpunan Mahasiswa Ilmu Komputer Gadjah Mada) biggest technology event, the website was beautifully made following current design trends.
                  </p>
                  <p className="paragraph">
                    <strong>5. QISCUS STUDENT AMBASSADOR</strong>
                    <br /> Feb 2018 – Apr 2018
                    <br /> A mentorship program from Qiscus (Singapore Based Startup) to develop my professional skills, leadership, partnerships. I got benefits such as hands- on experience in strategic projects, mentoring with Qiscus’ Management and others, including their COO.
                  </p>
                  <p className="paragraph">
                    <strong>6. BINAR ACADEMY iOS DEVELOPER</strong>
                    <br /> Feb 2018 – Mar 2018
                    <br /> 2 months intensive program to develop student’s software development skills. I got mentors from ex – GOJEK iOS engineer.
                  </p>
                </div>
              </div>


            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default about;
