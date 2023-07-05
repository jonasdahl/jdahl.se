import {
  Box,
  HStack,
  Heading,
  Spacer,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import type { DateTime } from "luxon";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useLocale } from "remix-i18next";

export function Section({ children }: { children: ReactNode }) {
  return <Stack spacing={6}>{children}</Stack>;
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
  const dateFormat = "LLL yyyy";
  const locale = useLocale();
  const { t } = useTranslation("resume");

  return (
    <Box>
      <HStack>
        <Wrap spacingY={0}>
          <WrapItem>
            <Stack spacing={1}>
              <Heading as="h3" size="sm">
                {title}
              </Heading>
            </Stack>
          </WrapItem>
          {location ? (
            <WrapItem fontSize="sm" fontWeight="light">
              {location}
            </WrapItem>
          ) : null}
        </Wrap>
        <Spacer />
        <Box
          whiteSpace="nowrap"
          textAlign="right"
          fontWeight="bold"
          fontSize="sm"
        >
          {start.toFormat(dateFormat, { locale })} -{" "}
          {end ? end.toFormat(dateFormat, { locale }) : t("now")}
        </Box>
      </HStack>
      {description ? <Box>{description}</Box> : null}
    </Box>
  );
}
