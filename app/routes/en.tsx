import { Box, Center } from "@chakra-ui/react";
import {
  faAsterisk,
  faChevronDown,
  faEnvelope,
  faGraduationCap,
  faLightbulb,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { LinksFunction } from "@remix-run/node";
import { Contact } from "~/components/contact";
import { LanguageButton } from "~/components/language-button";
import swedishFlag from "~/swedish.png";

export const links: LinksFunction = () => {
  return [{ rel: "alternate", hrefLang: "en-US", href: "https://jdahl.se/en" }];
};

export default function Index() {
  return (
    <>
      <LanguageButton to="/" label="På svenska" flag={swedishFlag} />
      <Box
        position="fixed"
        right="1rem"
        bottom="0.75rem"
        fontSize="sm"
        opacity={0.5}
        color="white"
      >
        Photo by me
      </Box>
      <Center h="100vh" color="white">
        <Contact
          name="Jonas Dahl"
          description="M.Sc Computer Science at KTH Royal Institute of Technology, Stockholm. Software engineer at Challengermode."
          phone="+46 (0)70-796 48 83"
          email="jonas@jdahl.se"
          githubUsername="jonasdahl"
          website={{ url: "https://jdahl.se", title: "jdahl.se" }}
        />
      </Center>
      <div className="down">
        <a
          href="#cv"
          id="cv-link"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("cv")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </div>
      <div id="cv"></div>
      <div className="cv">
        <h1>Jonas Dahl</h1>
        <span className="sub-cv">CV</span>

        <h2>
          <FontAwesomeIcon icon={faGraduationCap} /> Education
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
          <FontAwesomeIcon icon={faTrophy} /> Other experiences
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
          <FontAwesomeIcon icon={faAsterisk} /> Other projects
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
          <FontAwesomeIcon icon={faLightbulb} /> Skills
        </h2>
        <p>
          HTML, CSS, Javascript, React, Node.js, Vue.js, PHP, Laravel, Swift,
          Java, Scala, MongoDB, MySQL, PostgreSQL, Git, photography, Photoshop.
        </p>
        <p>Swedish Driving License.</p>

        <h2>
          <FontAwesomeIcon icon={faEnvelope} /> Languages
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
