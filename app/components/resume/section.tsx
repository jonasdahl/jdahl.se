import { Box, Heading, Spacer, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import { DateTime } from "luxon";
import { ReactNode } from "react";

export function Section({ children }: { children: ReactNode }) {
  return <Stack spacing={8}>{children}</Stack>;
}

export function SectionContent({ children }: { children: ReactNode }) {
  return <Stack spacing={8}>{children}</Stack>;
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <Heading as="h2" size="md">
      {children}
    </Heading>
  );
}

export function SectionItem({
  title,
  location,
  description,
  start,
  end,
}: {
  title: string;
  location?: string;
  description?: ReactNode;
  start: DateTime;
  end: DateTime | null;
}) {
  const dateFormat = "LLLL yyyy";

  return (
    <Box>
      <Wrap>
        <WrapItem>
          <Stack spacing={0}>
            <Heading as="h3" size="sm">
              {title}
            </Heading>
            {location ? (
              <Box fontSize="sm" fontWeight="semibold">
                {location}
              </Box>
            ) : null}
          </Stack>
        </WrapItem>
        <Spacer />
        <WrapItem fontWeight="bold" fontSize="sm">
          {start.toFormat(dateFormat, { locale: "sv-SE" })} -{" "}
          {end ? end.toFormat(dateFormat, { locale: "sv-SE" }) : "nu"}
        </WrapItem>
      </Wrap>
      {description ? <Box>{description}</Box> : null}
    </Box>
  );
}
