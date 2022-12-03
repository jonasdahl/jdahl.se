import { Center } from "@chakra-ui/react";
import {
  faAsterisk,
  faChevronDown,
  faGlobe,
  faGraduationCap,
  faLightbulb,
  faStar,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { LinksFunction } from "@remix-run/node";
import styles from "~/app.css";
import { Contact } from "~/components/contact";
import { LanguageButton } from "~/components/language-button";
import englishFlag from "~/english.png";

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
      <LanguageButton to="/en" label="In English" flag={englishFlag} />

      <Center h="100vh" color="white">
        <Contact
          name="Jonas Dahl"
          description="Civilingenjör i Datateknik. Mjukvaruutvecklare på Challengermode."
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
