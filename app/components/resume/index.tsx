import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Link as ChakraLink,
  Stack,
  Tag,
  TagLabel,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  faAsterisk,
  faGlobe,
  faGraduationCap,
  faLightbulb,
  faStar,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateTime } from "luxon";
import {
  Section,
  SectionContent,
  SectionHeading,
  SectionItem,
} from "./section";

export function Resume() {
  return (
    <Card bg="white" p={8}>
      <CardHeader>
        <Heading id="cv">Jonas Dahl</Heading>
      </CardHeader>
      <CardBody>
        <Stack spacing={6}>
          <Section>
            <SectionHeading>
              <FontAwesomeIcon icon={faStar} /> Erfarenhet
            </SectionHeading>
            <SectionContent>
              <SectionItem
                description="Tävlingsplattform för gaming och e-sport. Huvudfokus frontend."
                location="Challengermode AB"
                title="Mjukvaruingenjör"
                start={DateTime.fromObject({
                  year: 2022,
                  month: 9,
                  day: 13,
                })}
                end={null}
              />
              <SectionItem
                description="Verktyg och produkter inom IoT. Fullstack med tyngdpunkt på webbfrontend med React. Node.js och Java på backend."
                location="Altacogni AB"
                title="Mjukvaruingenjör"
                start={DateTime.fromObject({
                  year: 2020,
                  month: 8,
                  day: 21,
                })}
                end={DateTime.fromObject({ year: 2020, month: 6, day: 10 })}
              />
              <SectionItem
                description="Verktyg och produkter inom IoT. Fullstack med tyngdpunkt på webbfrontend med React. Node.js och Java på backend."
                location="Yanzi Networks AB"
                title="Mjukvaruingenjör"
                start={DateTime.fromObject({
                  year: 2018,
                  month: 8,
                  day: 21,
                })}
                end={DateTime.fromObject({ year: 2020, month: 7, day: 10 })}
              />
            </SectionContent>
          </Section>

          <Section>
            <SectionHeading>
              <FontAwesomeIcon icon={faGraduationCap} /> Utbildning
            </SectionHeading>
            <SectionContent>
              <SectionItem
                title="Civilingenjörsutbildning i Datateknik (300 hp)"
                description="Master i Datalogi med spåret Programvaruteknik och delspåret Programspråk. Kandidatexamensarbete samt kurslista lämnas gärna på begäran. Examen juni 2018."
                location="Kungliga tekniska högskolan"
                start={DateTime.fromObject({
                  year: 2013,
                  month: 8,
                  day: 24,
                })}
                end={DateTime.fromObject({ year: 2018, month: 6, day: 10 })}
              />
              <SectionItem
                title="Naturvetenskapsprogrammet"
                description="Gymnasieutbildning med inriktning Naturvetenskap."
                location="Hersby gymnasium"
                start={DateTime.fromObject({
                  year: 2010,
                  month: 8,
                  day: 24,
                })}
                end={DateTime.fromObject({ year: 2013, month: 6, day: 10 })}
              />
            </SectionContent>
          </Section>

          <Section>
            <SectionHeading>
              <FontAwesomeIcon icon={faTrophy} /> Övriga meriter
            </SectionHeading>
            <SectionContent>
              <SectionItem
                title="Ansvarig för Datasektionens Mottagning 2017"
                location="Konglig Datasektionen på KTH"
                description="Ideellt förtroendevald. Ytterst ansvarig för Datasektionens Mottagning av nya studenter vid Kungliga tekniska högskolan med en personal på 60 personer. Organiserade aktiviteter för de 200 nyantagna. Ekonomiskt ansvarig med en omsättning om drygt 1 mnkr."
                start={DateTime.fromObject({
                  year: 2017,
                  month: 1,
                  day: 1,
                })}
                end={DateTime.fromObject({
                  year: 2017,
                  month: 12,
                  day: 30,
                })}
              />
              <SectionItem
                title="Informationsorganet"
                location="Konglig Datasektionen på KTH"
                description={
                  <>
                    Utvecklat diverse system för Datasektionen. Se{" "}
                    <ChakraLink
                      textDecoration="underline"
                      href="https://github.com/jonasdahl"
                    >
                      Github
                    </ChakraLink>{" "}
                    för detaljerade projekt.
                  </>
                }
                start={DateTime.fromObject({
                  year: 2015,
                  month: 8,
                  day: 1,
                })}
                end={DateTime.fromObject({ year: 2019, month: 1, day: 30 })}
              />
              <SectionItem
                title="Laborationsassistent"
                location="Kungliga Tekniska Högskolan"
                description="Undervisade och examinerade datorlaborationer i kursen Programmeringsparadigm."
                start={DateTime.fromObject({
                  year: 2015,
                  month: 8,
                  day: 1,
                })}
                end={DateTime.fromObject({ year: 2016, month: 6, day: 30 })}
              />
              <SectionItem
                title="Fotbollsdomare"
                start={DateTime.fromObject({
                  year: 2007,
                  month: 4,
                  day: 1,
                })}
                end={null}
              />
              <SectionItem
                title="Periserve AB"
                start={DateTime.fromObject({
                  year: 2022,
                  month: 6,
                  day: 1,
                })}
                end={null}
                description={
                  <>
                    Tillhandahåller{" "}
                    <ChakraLink href="https://tidla.se">
                      Tidla bokningssystem för växande företag
                    </ChakraLink>
                    .
                  </>
                }
              />
            </SectionContent>
          </Section>

          <Section>
            <SectionHeading>
              <FontAwesomeIcon icon={faAsterisk} /> Övriga projekt
            </SectionHeading>
            <SectionContent>
              <Wrap spacing={2}>
                <ProjectItem
                  href="https://tidla.se"
                  label="Tidla bokningssystem"
                />
                <ProjectItem
                  href="https://packlistor.se"
                  label="Packlistor.se"
                />
                <ProjectItem href="https://trippler.se" label="Trippler" />
                <ProjectItem
                  href="https://github.com/jonasdahl/yanzi-to-homeassistant-mqtt"
                  label="Yanzi <-> Home Assistant MQTT"
                />
                <ProjectItem
                  href="https://fogis.addem.se/"
                  label="Fogis Kalenderexport för domare"
                />
              </Wrap>
            </SectionContent>
          </Section>

          <Section>
            <SectionHeading>
              <FontAwesomeIcon icon={faLightbulb} /> Kompetenser
            </SectionHeading>

            <SectionContent>
              <Wrap spacing={2}>
                {tags.map((tag) => (
                  <WrapItem key={tag}>
                    <Tag>{tag}</Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </SectionContent>
          </Section>
          <Text>Har svenskt körkort.</Text>

          <Section>
            <SectionHeading>
              <FontAwesomeIcon icon={faGlobe} /> Språk
            </SectionHeading>
            <SectionContent>
              <Text>
                Talar engelska och svenska flytande. Förstår spanska på en
                grundläggande nivå.
              </Text>
            </SectionContent>
          </Section>
        </Stack>
      </CardBody>
    </Card>
  );
}

const tags = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Node.js",
  "Vue.js",
  "PHP",
  "Laravel",
  "Swift",
  "Java",
  "Scala",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Git",
  "fotografering",
  "Photoshop",
];

function ProjectItem({ href, label }: { href: string; label: string }) {
  return (
    <WrapItem>
      <Tag>
        <TagLabel>
          <ChakraLink textDecoration="underline" href={href}>
            {label}
          </ChakraLink>
        </TagLabel>
      </Tag>
    </WrapItem>
  );
}
