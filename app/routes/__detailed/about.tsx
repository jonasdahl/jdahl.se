import { Container, useMediaQuery } from "@chakra-ui/react";
import { Resume } from "~/components/resume";

export let handle = { i18n: "resume" };

export default function Cv() {
  const [isPrint] = useMediaQuery("print");

  return (
    <Container
      maxW={isPrint ? "auto" : "container.md"}
      pb={24}
      px={isPrint ? 0 : undefined}
    >
      <Resume />
    </Container>
  );
}
