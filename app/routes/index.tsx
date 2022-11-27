import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faAsterisk,
  faChevronDown,
  faEnvelope,
  faGlobe,
  faGraduationCap,
  faHome,
  faLightbulb,
  faPhone,
  faStar,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { LinksFunction } from "@remix-run/node";
import styles from "~/app.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "alternate",
      hrefLang: "sv-SE",
      href: "https://jdahl.se",
    },
  ];
};

export default function Index() {
  return (
    <>
      <div className="language english" id="language">
        <a href="en">
          <span></span>
        </a>
      </div>
      <div className="contact">
        <div className="middle">
          <h1>Jonas Dahl</h1>
          <p>
            Civilingenjör i Datateknik. Mjukvaruutvecklare på Challengermode.
          </p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faPhone} /> 070-796 48 83
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> <span>jonas</span>@
              <span>jdahl.se</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              <a href="https://github.com/jonasdahl">jonasdahl</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faGlobe} />{" "}
              <a href="http://jdahl.se">jdahl.se</a>
            </li>
          </ul>
        </div>
      </div>
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
        <h1>
          Jonas <span className="print-only">Dahl</span>
        </h1>
        <ul className="info print-only">
          <li>
            <FontAwesomeIcon icon={faPhone} /> 070-796 48 83
            <FontAwesomeIcon icon={faEnvelope} /> <span>jonas</span>@
            <span>jdahl.se</span>
          </li>
          <li></li>
          <li>
            <FontAwesomeIcon icon={faHome} /> Solna
          </li>
          <li>
            <FontAwesomeIcon icon={faGlobe} />{" "}
            <a href="http://jdahl.se">jdahl.se</a>
            <FontAwesomeIcon icon={faGithub} />
            <a href="https://github.com/jonasdahl">jonasdahl</a>
          </li>
        </ul>

        <h2>
          <FontAwesomeIcon icon={faStar} /> Erfarenhet
        </h2>
        <ul>
          <li>
            <span className="time">september 2022 - nu</span>
            <h3>Mjukvaruingenjör</h3>
            <span className="location">Challengermode AB</span>
            <span className="description">
              Tävlingsplattform för gaming och e-sport. Huvudfokus frontend.
            </span>
          </li>
          <li>
            <span className="time">augusti 2020 - juni 2022</span>
            <h3>Mjukvaruingenjör</h3>
            <span className="location">Altacogni AB</span>
            <span className="description">
              Verktyg och produkter inom IoT. Fullstack med tyngdpunkt på
              webbfrontend med React. Node.js och Java på backend.
            </span>
          </li>
          <li>
            <span className="time">augusti 2018 - juli 2020</span>
            <h3>Mjukvaruingenjör</h3>
            <span className="location">Yanzi Networks AB</span>
            <span className="description">
              Verktyg och produkter inom IoT. Fullstack med tyngdpunkt på
              webbfrontend med React. Node.js och Java på backend.
            </span>
          </li>
        </ul>

        <h2>
          <FontAwesomeIcon icon={faGraduationCap} /> Utbildning
        </h2>
        <ul>
          <li>
            <span className="time">augusti 2013 - juni 2018</span>
            <h3>
              Civilingenjörsutbildning i Datateknik
              <span className="points">(300 hp)</span>
            </h3>
            <span className="location">Kungliga tekniska högskolan</span>
            <span className="description">
              Master i Datalogi med spåret Programvaruteknik och delspåret
              Programspråk. Kandidatexamensarbete samt kurslista lämnas gärna på
              begäran. Planerad examen juni 2018.
            </span>
          </li>
          <li>
            <span className="time">augusti 2010 - juni 2013</span>
            <h3>Naturvetenskapsprogrammet</h3>
            <span className="location">Hersby gymnasium</span>
            <span className="description">
              Gymnasieutbildning med inriktning natur. Betygsutdrag lämnas gärna
              på begäran.
            </span>
          </li>
        </ul>

        <h2>
          <FontAwesomeIcon icon={faTrophy} /> Övriga meriter
        </h2>
        <ul>
          <li>
            <span className="time">januari 2017 - december 2017</span>
            <h3>Ansvarig för Datasektionens Mottagning 2017</h3>
            <span className="location">Konglig Datasektionen</span>
            <span className="description">
              Ideellt förtroendevald. Ytterst ansvarig för Datasektionens
              Mottagning av nya studenter vid Kungliga tekniska högskolan med en
              personal på 60 personer. Organiserade aktiviteter för de 200
              nyantagna. Ekonomiskt ansvarig med en omsättning om drygt 1 mnkr.
            </span>
          </li>
          <li>
            <span className="time">augusti 2015 - januari 2019</span>
            <h3>Informationsorganet</h3>
            <span className="location">Konglig Datasektionen</span>
            <span className="description">
              Utvecklat diverse system för Datasektionen. Se
              <a href="https://github.com/jonasdahl">Github</a> för detaljerade
              projekt.
            </span>
          </li>
          <li>
            <span className="time">augusti 2015 - juni 2016</span>
            <h3>Laborationsassistent</h3>
            <span className="location">Kungliga Tekniska Högskolan</span>
            <span className="description">
              Undervisade och examinerade datorlaborationer i kursen
              Programmeringsparadigm.
            </span>
          </li>
          <li>
            <span className="time">april 2007 - nu</span>
            <h3>Fotbollsdomare</h3>
          </li>
          <li>
            <span className="time">juni 2022 - nu</span>
            <h3>Periserve</h3>
            <span className="description">
              Tillhandahåller
              <a href="https://tidla.se">
                Tidla bokningssystem för växande företag
              </a>
              .
            </span>
          </li>
        </ul>

        <h2>
          <FontAwesomeIcon icon={faAsterisk} /> Övriga projekt
        </h2>
        <p>
          <a href="https://tidla.se">Tidla bokningssystem</a>,
          <a href="https://packlistor.se">Packlistor</a>,
          <a href="https://github.com/jonasdahl/yanzi-to-homeassistant-mqtt">
            Yanzi &lt;-&gt; Home Assistant MQTT
          </a>
          , <a href="https://fogis.addem.se/">Fogis Kalenderexport</a>
        </p>

        <h2>
          <FontAwesomeIcon icon={faLightbulb} /> Kompetenser
        </h2>
        <p>
          HTML, CSS, Javascript, React, Node.js, Vue.js, PHP, Laravel, Swift,
          Java, Scala, MongoDB, MySQL, PostgreSQL, Git, fotografering,
          Photoshop.
        </p>
        <p>Har svenskt körkort.</p>

        <h2>
          <FontAwesomeIcon icon={faGlobe} /> Språk
        </h2>
        <p>
          Talar engelska och svenska flytande. Förstår spanska på en
          grundläggande nivå.
        </p>
      </div>
    </>
  );
}
