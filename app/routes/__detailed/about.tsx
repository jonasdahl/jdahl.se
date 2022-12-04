import { Container } from "@chakra-ui/react";
import { Resume } from "~/components/resume";

export let handle = { i18n: "resume" };

export default function Cv() {
  return (
    <Container maxW="container.md" pb={24}>
      <Resume />
    </Container>
  );
}
