import type { LinksFunction } from "@remix-run/node";
import styles from "~/app.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Index() {
  return (
    <>
      <div className="language swedish" id="language">
        <a href="..">
          <span></span>
        </a>
      </div>
      <div className="photo-cred">Photo by me</div>
      <div className="contact">
        <div className="middle">
          <h1>Jonas Dahl</h1>
          <p>
            Studying computer science at the Royal Institute of Technology,
            Stockholm (KTH).
          </p>
          <ul>
            <li>
              <i className="fa fa-phone"></i> +46 70-796 48 83
            </li>
            <li>
              <i className="fa fa-envelope"></i> <span>jonas</span>@
              <span>jdahl.se</span>
            </li>
            <li>
              <i className="fa fa-github"></i>
              <a href="https://github.com/jonasdahl">jonasdahl</a>
            </li>
            <li>
              <i className="fa fa-globe"></i>{" "}
              <a href="http://jdahl.se">jdahl.se</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="down">
        <a href="#cv" id="cv-link">
          <i className="fa fa-chevron-down"></i>
        </a>
      </div>
      <div id="cv"></div>
      <div className="cv">
        <h1>
          Jonas <span className="print-only">Dahl</span>
        </h1>
        <span className="sub-cv">CV</span>
        <ul className="info print-only">
          <li>
            <i className="fa fa-phone"></i> 070-796 48 83
            <i className="fa fa-envelope"></i> <span>jonas</span>@
            <span>jdahl.se</span>
          </li>
          <li></li>
          <li>
            <i className="fa fa-home"></i> Kungshamra 3, 170 70 Solna
          </li>
          <li>
            <i className="fa fa-globe"></i>{" "}
            <a href="http://jdahl.se">jdahl.se</a>
            <i className="fa fa-github"></i>
            <a href="https://github.com/jonasdahl">jonasdahl</a>
          </li>
        </ul>

        <h2>
          <i className="fa fa-star"></i> Work experience
        </h2>
        <ul>
          <li>
            <span className="time">September 2020 - present</span>
            <h3>Software engineer</h3>
            <span className="location">Challengermode AB</span>
            <span className="description">
              Platform for e-sports and gaming competitions. Main focus
              frontend.
            </span>
          </li>
          <li>
            <span className="time">August 2020 - June 2022</span>
            <h3>Software engineer</h3>
            <span className="location">Altacogni AB</span>
            <span className="description">
              Tools and products within the IoT area. Fullstack with focus on
              web frontend with React. Node.js and Java on the backend.
            </span>
          </li>
          <li>
            <span className="time">August 2018 - July 2020</span>
            <h3>Software engineer</h3>
            <span className="location">Yanzi Networks AB</span>
            <span className="description">
              Tools and products within the IoT area. Fullstack with focus on
              web frontend with React. Node.js and Java on the backend.
            </span>
          </li>
        </ul>

        <h2>
          <i className="fa fa-graduation-cap"></i> Education
        </h2>
        <ul>
          <li>
            <span className="time">August 2013 - June 2018</span>
            <h3>
              Degree programme in Computer Science
              <span className="points">(300 ETCS)</span>
            </h3>
            <span className="location">
              Royal Institute of Technology, KTH (Stockholm)
            </span>
            <span className="description">
              Master in Computer Science. Specialization Software Technology
              with the subtrack Programming Languages. Course list and First
              Cycle Degree Project is available on request. Graduating june
              2018.
            </span>
          </li>
          <li>
            <span className="time">August 2010 - June 2013</span>
            <h3>Natural science programme</h3>
            <span className="location">Hersby gymnasium</span>
            <span className="description">
              Upper secondary school focused on math and natural science. Course
              list is available on request.
            </span>
          </li>
        </ul>

        <h2>
          <i className="fa fa-trophy"></i> Other experiences
        </h2>
        <ul>
          <li>
            <span className="time">January 2017 - December 2017</span>
            <h3>Head of the Reception</h3>
            <span className="location">Konglig Datasektionen</span>
            <span className="description">
              Volountary and elected. As head of the Reception of new students
              at Datasektionen at KTH, I was liable of a staff of 60 persons. We
              organized activities for the 200 newly admitted students.
              Financially responsible with a turnover of 1 million SEK.
            </span>
          </li>
          <li>
            <span className="time">August 2015 - January 2019</span>
            <h3>Informationsorganet</h3>
            <span className="location">Konglig Datasektionen</span>
            <span className="description">
              Developed different web systems for Datasektionen. See
              <a href="https://github.com/jonasdahl">Github</a> for detailed
              projects.
            </span>
          </li>
          <li>
            <span className="time">August 2015 - June 2016</span>
            <h3>Teaching assistant</h3>
            <span className="location">Royal Institute of Technology, KTH</span>
            <span className="description">
              Taught and examined computer labs in the course Programming
              Paradigms.
            </span>
          </li>
          <li>
            <span className="time">April 2007 - present</span>
            <h3>Soccer referee</h3>
          </li>
          <li>
            <span className="time">June 2022 - present</span>
            <h3>Periserve</h3>
            <span className="description">
              Providing
              <a href="https://tidla.se">
                Tidla, booking systems for smaller businesses
              </a>
              .
            </span>
          </li>
        </ul>

        <h2>
          <i className="fa fa-asterisk"></i> Other projects
        </h2>
        <p>
          <a href="https://tidla.se">Tidla booking systems</a>,
          <a href="https://packlistor.se">Packing lists</a>,
          <a href="https://github.com/jonasdahl/yanzi-to-homeassistant-mqtt">
            Yanzi &lt;-&gt; Home Assistant MQTT
          </a>
          , <a href="https://fogis.addem.se/">Fogis Calendar export</a>
        </p>

        <h2>
          <i className="fa fa-lightbulb-o"></i> Skills
        </h2>
        <p>
          HTML, CSS, Javascript, React, Node.js, Vue.js, PHP, Laravel, Swift,
          Java, Scala, MongoDB, MySQL, PostgreSQL, Git, photography, Photoshop.
        </p>
        <p>Swedish Driving License.</p>

        <h2>
          <i className="fa fa-globe"></i> Languages
        </h2>
        <p>
          Speaks English and Swedish fluently. Understands Spanish on a basic
          level.
        </p>
        <p className="info">
          References and course result transcripts are available on request.
        </p>
      </div>
    </>
  );
}
