import {
  Container,
  Heading,
  Link,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactNode } from "react";

export function Contact({
  description,
  email,
  name,
  phone,
  githubUsername,
  website,
}: {
  name: string;
  description: string;
  phone: string;
  email: string;
  githubUsername: string;
  website: { url: string; title: string };
}) {
  return (
    <Container maxW="22rem">
      <VStack spacing={6} textAlign="center">
        <Heading>{name}</Heading>
        <Text w="100%">{description}</Text>
        <Wrap justify="center" align="center">
          <Item icon={faPhone} value={phone} />
          <Item icon={faEnvelope} value={email} />
          <Item
            icon={faGithub}
            value={
              <Link
                rel="nofollow noreferrer"
                href={`https://github.com/${githubUsername}`}
              >
                {githubUsername}
              </Link>
            }
          />
          <Item
            icon={faGlobe}
            value={<Link href={website.url}>{website.title}</Link>}
          />
        </Wrap>
      </VStack>
    </Container>
  );
}

function Item({ icon, value }: { icon: IconDefinition; value: ReactNode }) {
  return (
    <WrapItem>
      <Tag variant="subtle">
        <TagLeftIcon>
          <FontAwesomeIcon icon={icon} />
        </TagLeftIcon>
        <TagLabel>{value}</TagLabel>
      </Tag>
    </WrapItem>
  );
}
