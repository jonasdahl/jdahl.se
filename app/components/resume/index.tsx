import {
  Card,
  CardBody,
  CardHeader,
  Link as ChakraLink,
  Heading,
  Stack,
  Tag,
  TagLabel,
  Text,
  Wrap,
  WrapItem,
  useColorModeValue,
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
import { Trans, useTranslation } from "react-i18next";
import {
  Section,
  SectionContent,
  SectionHeading,
  SectionItem,
} from "./section";

export function Resume() {
  const { t } = useTranslation(["resume"]);

  return (
    <Card bg={useColorModeValue("white", undefined)} p={8}>
      <CardHeader>
        <Heading id="cv">Jonas Dahl</Heading>
      </CardHeader>
      <CardBody>
        <Stack spacing={10}>
          <Section>
            <SectionHeading>
              <FontAwesomeIcon icon={faStar} /> {t("workExperience")}
            </SectionHeading>
            <SectionContent>
              <SectionItem
                description={t("experience.challengermode.description")}
                location="Challengermode AB"
                title={t("softwareEngineer")}
                start={DateTime.fromObject({ year: 2022, month: 9, day: 13 })}
                end={DateTime.fromObject({ year: 2023, month: 7, day: 5 })}
              />
              <SectionItem
                description={t("experience.altacogni.description")}
                location="Altacogni AB"
                title={t("softwareEngineer")}
                start={DateTime.fromObject({ year: 2020, month: 8, day: 21 })}
                end={DateTime.fromObject({ year: 2020, month: 6, day: 10 })}
              />
              <SectionItem
                description={t("experience.yanzi.description")}
                location="Yanzi Networks AB"
                title={t("softwareEngineer")}
                start={DateTime.fromObject({ year: 2018, month: 8, day: 21 })}
                end={DateTime.fromObject({ year: 2020, month: 7, day: 10 })}
              />
            </SectionContent>
          </Section>

          <Section>
            <SectionHeading>
              <FontAwesomeIcon icon={faGraduationCap} /> {t("education.title")}
            </SectionHeading>
            <SectionContent>
              <SectionItem
                title={t("education.kth.title")}
                description={t("education.kth.description")}
                location={t("kth") ?? "KTH"}
                start={DateTime.fromObject({ year: 2013, month: 8, day: 24 })}
                end={DateTime.fromObject({ year: 2018, month: 6, day: 10 })}
              />
              <SectionItem
                title={t("education.highscool.title")}
                description={t("education.highscool.description")}
                location="Hersby gymnasium"
                start={DateTime.fromObject({ year: 2010, month: 8, day: 24 })}
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
                title={t("activities.reception.title")}
                location={t("konglig-datasektionen") ?? "Konglig Datasektionen"}
                description={t("activities.reception.description")}
                start={DateTime.fromObject({ year: 2017, month: 1, day: 1 })}
                end={DateTime.fromObject({ year: 2017, month: 12, day: 30 })}
              />
              <SectionItem
                title={t("activities.ior.title")}
                location={t("konglig-datasektionen") ?? "Konglig Datasektionen"}
                description={
                  <Trans ns="resume" i18nKey="activities.ior.description">
                    {`Utvecklat diverse system för Datasektionen. Se`}
                    <ChakraLink
                      textDecoration="underline"
                      href="https://github.com/jonasdahl"
                    >
                      {`{{1}}`}
                    </ChakraLink>
                    {`för detaljerade projekt.`}
                  </Trans>
                }
                start={DateTime.fromObject({ year: 2015, month: 8, day: 1 })}
                end={DateTime.fromObject({ year: 2019, month: 1, day: 30 })}
              />
              <SectionItem
                title={t("activities.ta.title")}
                location={t("kth") ?? "KTH"}
                description={t("activities.ta.description")}
                start={DateTime.fromObject({ year: 2015, month: 8, day: 1 })}
                end={DateTime.fromObject({ year: 2016, month: 6, day: 30 })}
              />
              <SectionItem
                title={t("activities.referee.title")}
                start={DateTime.fromObject({ year: 2007, month: 4, day: 1 })}
                end={null}
              />
              <SectionItem
                title="Periserve AB"
                start={DateTime.fromObject({ year: 2022, month: 6, day: 1 })}
                end={null}
                description={
                  <Trans ns="resume" i18nKey="activities.periserve.description">
                    {"Tillhandahåller "}
                    <ChakraLink
                      textDecoration="underline"
                      href="https://tidla.se"
                    >
                      {"Tidla bokningssystem för växande företag"}
                    </ChakraLink>
                    {"."}
                  </Trans>
                }
              />
            </SectionContent>
          </Section>

          <Section>
            <SectionHeading>
              <FontAwesomeIcon icon={faAsterisk} /> {t("other")}
            </SectionHeading>
            <SectionContent>
              <Wrap spacing={2}>
                <ProjectItem
                  href="https://tidla.se"
                  label={t("tidla-bokningssystem")}
                />
                <ProjectItem
                  href="https://soltidtabellen.se"
                  label="Soltidtabellen"
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
                  label={t("fogisCalendarExport")}
                />
              </Wrap>
            </SectionContent>
          </Section>

          <Section>
            <SectionHeading>
              <FontAwesomeIcon icon={faLightbulb} /> {t("skills")}
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
          <Text>{t("driving-license")}</Text>

          <Section>
            <SectionHeading>
              <FontAwesomeIcon icon={faGlobe} /> {t("languages")}
            </SectionHeading>
            <SectionContent>
              <Text>{t("languages-content")}</Text>
            </SectionContent>
          </Section>
        </Stack>
      </CardBody>
    </Card>
  );
}

const tags = [
  "Remix",
  "Next.js",
  "React",
  "Typescript",
  "Javascript",
  "HTML",
  "CSS",
  "Web",
  "Deno",
  "Bun",
  "Dotnet",
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
